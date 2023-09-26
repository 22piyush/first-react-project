import "./About.css";
import Navbar from "./../../component/Navbar/Navbar";
import Footer from "./../../component/Footer/Footer";

export default function About()
{
    return(
        <div className="about-container"> 
            <Navbar/>
            <h1>About</h1>
            <p>this is about page</p>
            <Footer/>
        </div>
    )
}