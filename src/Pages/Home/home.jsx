// CSS imports
import "./home.scss";

//Component imports
import TopNavbar from '../../components/Top Navbar/topNavbar';
import AboutMe from '../../components/About Me/aboutMe';
import Coaching from '../../components/Coaching/coaching';
import Speaking from '../../components/Speaking/speaking';
import BlogCorner from '../../components/Blog Corner/blogCorner';
import Testimonials from '../../components/Testimonials/testimonials';
import Contact from '../../components/Contact/contact';
import Menu from '../../components/Menu/menu';
import Footer from '../../components/Footer/footer';

export default function home() {
    return (
        <div className="home">
            <div className="sections">
                {/* Components */}
                <AboutMe />
                <Coaching />
                <Speaking />
                <BlogCorner />
                <Testimonials />
                <Contact />
            </div>
        </div>
    )
}
