import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar()
{
    return(
        <div className="navbar">
            <h2 className="nav-brand">reactjs</h2>
            <Link className="nav-menu" to="/">home</Link>
            <Link className="nav-menu" to="/About">about</Link>
            <Link className="nav-menu" to="/Contact">contact</Link>

        </div>
    )
}