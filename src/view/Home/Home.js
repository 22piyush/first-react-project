import "./Home.css";
import Navbar from "./../../component/Navbar/Navbar";
import Footer from "./../../component/Footer/Footer";

export default function Home()
{
    return(
        <div className="home-container"> 
            <Navbar/>
            <h1>Home</h1>
            <p>this is home page </p>
            <Footer/>

        </div>
    )
}