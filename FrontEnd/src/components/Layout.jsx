import Header from "./header"
import HeaderAuth from "./HeaderAuth"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth.js";

const Layout = () => {
    const { user } = useAuth();
    return (
        <div style={{
            backgroundColor: "#000000",
        }}>
            {user ? (
        <>
          <HeaderAuth/>
        </>
      ) : (
        <Header />
      )}
            <div className="main-content">
            <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;