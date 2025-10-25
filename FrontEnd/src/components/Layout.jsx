import Header from "./header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div style={{
            backgroundColor: "#000000",
        }}>
            <Header />
            <div className="main-content">
            <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;