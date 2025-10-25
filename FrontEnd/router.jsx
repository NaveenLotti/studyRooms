import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './src/components/home.jsx';
import Login from './src/Pages/login.jsx';
import SignUp from './src/Pages/signUp.jsx';
import Layout from './src/components/Layout.jsx';
import AboutUs from './src/components/aboutUs.jsx';
import CreateRoom from './src/Pages/createRoom.jsx';
import JoinRoom from './src/Pages/joinRooms.jsx';
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