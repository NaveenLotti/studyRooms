import { useState } from 'react'
import './signUp.css';
function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [topics, setTopics] = useState([]);
    const [error, setError] = useState('');
    const [submit, setSubmit] = useState(false);

    const hadleSubmit = (e) => {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            e.preventDefault();
        }
        else{
            setSubmit(true);
        }
    }

    const handleTopics = (e) => {
        const value = e.target.value;
        const topicsArray = value.split(',').map(topic => topic.trim());
        setTopics(topicsArray);
    }

    return (
        <>
        <div className="formContainer">
            <h1 style={{color:'#1041b5',backgroundColor:'#262626',marginBottom:'20px'}}>Sign Up</h1>
            <input type="text"
                value={name}
                onChange={ (e) => setName(e.target.value) }
                placeholder="Name" />

            <input type="email" name="email" id="email"
                value = {email}
                onChange = { (e) => setEmail(e.target.value)}
                placeholder = "Email" />
            
            <input type="password" name="password" id="password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value) }
                placeholder='password'/>

            <input type="text"
                value={topics}
                onChange={handleTopics}
                placeholder="Topics you are interested in by commas" />

            <input type="password" name="confirmPassword" id="confirmPassword"
                value = {confirmPassword}
                onChange = {(e) => setConfirmPassword(e.target.value) }
                placeholder='Confirm Password'/>
            
            <button onClick={hadleSubmit}>Sign Up</button>

            { error && <p className="error">{error}</p> }
            { submit && <p className="success">Signed Up Successfully</p> }

        </div>
        
        </>
    )
}

export default SignUp;