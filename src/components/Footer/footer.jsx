import "./footer.scss";

export default function Footer() {
    return (
        <div>
            <footer>
                <div><img className="footer-logo" src="assets/jack_logo.png" alt="" /></div>

                <div className="social">
                    <a href="https://www.linkedin.com/in/jack-romero?trk=people-guest_people_search-card" target="_blank"><img src="assets/linkedin.png"></img></a>
                    <a href="#"><img src="assets/twitter.png" /></a>
                    <a href="https://www.instagram.com/jackromero2602/" target="_blank"><img src="assets/instagram.webp" /></a>
                    <a href="#"><img src="assets/facebook.webp" /></a>
                </div>

                <div className="copyright">&copy;Copyright 2021. All rights reserved.</div>
                
            </footer>
            {/* <div id="ScrollToTopBtn" className="btnScrollToTop">
                <a href="#about_me"><i className="fas fa-angle-up"></i></a>
            </div> */}
        </div>
    )
}
