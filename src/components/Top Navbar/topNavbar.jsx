import "./topNavbar.scss";

import { useHistory } from "react-router-dom";

//Pages imports
import Blogs from "../../Pages/Blogs/blogs";

// Navigation imports
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Images import
import jack_logo from "../../images/jr_partnership.png";

export default function TopNavbar({ menuOpen, setMenuOpen }) {

    let history = useHistory();

    return (
        <div className={"top-navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                {/* Left */}
                <div className="left">
                    <div className="logo-container">
                        <a href="https://www.linkedin.com/company/jr-investments-education-partnerships/?miniCompanyUrn=urn%3Ali%3Afs_miniCompany%3A30613803" className="link" target="_blank"><img src={jack_logo} /></a>
                    </div>

                </div>

                {/* Right (only for Mobile phones) */}
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line1"></span>
                        <span className="line1"></span>
                    </div>
                </div>

                <div className="right-section">
                    <ul>
                        <li><Link to="/" className="link" >Home</Link></li>
                        <li><Link to="/about-me" className="link">About Me</Link></li>
                        <li><Link to="/coaching-main" className="link">Coaching</Link></li>
                        <li><Link to="/speaking" className="link">Speaking</Link></li>
                        <li><Link to="/blogs" className="link">Blogs</Link></li>
                        <li><Link to="/funding-corner" className="link">Funding Corner</Link></li>
                        {/* <li><Link to="/testimonials" className="link">Testimonials</Link></li> */}
                        <li><Link to="/contact" className="link">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
