import {useState} from 'react';
import './login.css';
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <>
        <div className="loginContainer">
            <h1 style={{color:'#1041b5',backgroundColor:'#1a1a1a',marginBottom:'20px'}}>Login</h1>
            <input type="email"
                className="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" /> 

            <input type="password"
                className="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" />
            
            <button type="submit" className="btn">Login</button>
        </div>
        </>
    )
}

export default Login;