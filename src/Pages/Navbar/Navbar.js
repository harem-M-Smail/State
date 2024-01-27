import { Link } from "react-router-dom"

const Navbar=()=>{
    return(
        <div className="bg-black w-full h-16 flex items-center pl-2.5">
            <Link className="text-xl font-bold text-white font-serif" to="/">Home</Link>
        </div>
    )
}
export default Navbar