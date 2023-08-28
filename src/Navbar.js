import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <nav className="absolute bottom-0 w-full px-10 mb-5">
            <ul className="flex justify-between items-center w-full">
                <li className="flex flex-col items-center justify-center">
                    <Link to="/" className="flex flex-col justify-center items-center">
                        <p className="tabs">Home</p><FontAwesomeIcon icon={faHouse} className="border border-solid border-fadedBlue bg-fadedBlue rounded-full p-5 mt-2 hover:bg-skyBlue hover:border-skyBlue"/>
                    </Link>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <Link to="/list" className="flex flex-col justify-center items-center">
                        <p className="tabs">Search</p><FontAwesomeIcon icon={faMagnifyingGlass} className="border border-solid border-fadedBlue bg-fadedBlue rounded-full p-5 mt-2 hover:bg-skyBlue hover:border-skyBlue"/>
                    </Link>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <Link to="/saved" className="flex flex-col justify-center items-center">
                        <p className="tabs">Saved</p><FontAwesomeIcon icon={faBookmark} className="border border-solid border-fadedBlue bg-fadedBlue rounded-full p-5 mt-2 hover:bg-skyBlue hover:border-skyBlue"/>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;