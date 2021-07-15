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
                    <Link to="/" className="link">Coaching</Link>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <Link to="/" className="link">Speaking</Link>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <Link to="/blogs" className="link">Blogs</Link>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <Link to="/" className="link">Funds Corner</Link>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <Link to="/" className="link">Testimonials</Link>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <Link to="/" className="link">Contact</Link>
                </li>
                
            </ul>
        </div>
    )
}
