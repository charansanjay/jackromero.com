import "./menu.scss";

// Navigation imports
import { Link } from "react-router-dom";

export default function menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() =>setMenuOpen(false)}>
                    <Link to="/" className="link">Home</Link>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <Link to="/about-me" className="link">About Me</Link>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <Link to="/coaching-main" className="link">Coaching</Link>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <Link to="/speaking" className="link">Speaking</Link>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <Link to="/blogs" className="link">Blogs</Link>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <Link to="/funding-corner" className="link">Funding Corner</Link>
                </li>
                {/* <li onClick={() =>setMenuOpen(false)}>
                    <Link to="/" className="link">Testimonials</Link>
                </li> */}
                <li onClick={() =>setMenuOpen(false)}>
                    <Link to="/contact" className="link">Contact</Link>
                </li>
                
            </ul>
        </div>
    )
}
