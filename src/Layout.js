import { Outlet } from "react-router-dom"
import Navbar from "./Pages/Navbar/Navbar"

const Layout=()=>{
    return(
        <div className="layout">
            <Navbar/>
            <Outlet/>
        </div>
    )
}
export default Layout