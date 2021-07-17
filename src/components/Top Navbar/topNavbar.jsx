import "./topNavbar.scss";

import { useHistory } from "react-router-dom";

//Pages imports
import Blogs from "../../Pages/Blogs/blogs";

// Navigation imports
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Images import
import jack_logo from "../../images/jack_logo.png";

export default function TopNavbar({ menuOpen, setMenuOpen }) {

    let history = useHistory();

    return (
        <div className={"top-navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                {/* Left */}
                <div className="left">
                    <a href="#about_me"><img src={jack_logo} /></a>
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
                        <li><Link to="/home" className="link" >Home</Link></li>
                        <li><Link to="/about-me" className="link">About Me</Link></li>
                        <li><Link to="/coaching-main" className="link">Coaching</Link></li>
                        <li><Link to="/speaking" className="link">Speaking</Link></li>
                        <li><Link to="/blogs" className="link">Blogs</Link></li>
                        <li><Link to="/funding-corner" className="link">Funding Corner</Link></li>
                        {/* <li><Link to="/testimonials" className="link">Testimonials</Link></li> */}
                        <li><Link to="/contact" className="link">Contact</Link></li>
                    </ul>

                    {/* <a href="#about_me">Home</a>
                    <a href="#about_me">About Me</a>
                    <a href="#coaching">Coaching</a>
                    <a href="#speaking">Speaking</a> */}
                    {/* <a href="" onClick={() => {history.push("/blogs")}}>Blog Corner</a> */}
                    {/* <Router>
                        <Link to="/" >Blog Corner</Link>
                        <Route path="/blogs" component={Blogs} />
                    </Router> */}

                    {/* <a href="#testimonials">Testimonials</a>
                    <a href="#contact">Contact</a> */}
                </div>
            </div>
        </div>
    )
}
