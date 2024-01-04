import "./header.css"
import { Link } from "react-router-dom";
import Logo from "../img/solid_bold_LOGO.png"


function Header() {
    return(
        <header className="w1200 headerWrap">
            <div>
                <img className="Logo" src={Logo} alt="로고"></img>
                <Link to="/Write"><p>UPDATE</p></Link>
            </div>
        </header>
    )
}

export default Header;