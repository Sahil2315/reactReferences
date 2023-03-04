import { Link } from "react-router-dom"
import "./index.css"
function Navbar(){
    return(
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}


export default Navbar