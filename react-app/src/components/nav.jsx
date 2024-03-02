import Logo from "../images/logoNoBgNPad.png";
import "../styles/nav.css"
export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul className="left-side">
                    <li className="imgLi"><img src={Logo} alt="The color-inverted form of the Inscribe Logo" /> <span>Inscribe</span></li>
                    <li>Home</li>
                    <li>Plans</li>
                </ul>
                <ul className="right-side">
                    <li>Help</li>
                    <li><button className="sc-btn inv-sc-btn">Get Started</button></li>
                </ul>
            </nav>
        </>
    )
}