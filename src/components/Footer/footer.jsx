import "./footer.scss";

// Images import
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.webp";
import facebook from "../../images/facebook.webp";
import jack_logo from "../../images/jack_logo.png";


export default function Footer() {
    return (
        <div>
            <footer>
                <div><img className="footer-logo" src={jack_logo} alt="" /></div>

                <div className="social">
                    <a href="https://www.linkedin.com/in/jack-romero?trk=people-guest_people_search-card" target="_blank"><img src={linkedin}></img></a>
                    <a href="#"><img src={twitter} /></a>
                    <a href="https://www.instagram.com/jackromero2602/" target="_blank"><img src={instagram} /></a>
                    <a href="#"><img src={facebook} /></a>
                </div>

                <div className="copyright">&copy;Copyright 2021. All rights reserved.</div>
                
            </footer>
            {/* <div id="ScrollToTopBtn" className="btnScrollToTop">
                <a href="#about_me"><i className="fas fa-angle-up"></i></a>
            </div> */}
        </div>
    )
}
