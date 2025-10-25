import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './src/components/home.jsx';
import Login from './src/components/login.jsx';
import SignUp from './src/components/signUp.jsx';
import Layout from './src/components/Layout.jsx';
import AboutUs from './src/components/aboutUs.jsx';
import CreateRoom from './src/components/createRoom.jsx';
import JoinRoom from './src/components/joinRooms.jsx';
import Posts from './src/components/posts.jsx';
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route element = {<Layout/>} >
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/createRoom" element={<CreateRoom />} />
                    <Route path="/joinRoom" element={<JoinRoom />} />
                    <Route path="/posts" element={<Posts />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;