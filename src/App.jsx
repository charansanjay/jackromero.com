// Component Imports
import TopNavbar from './components/Top Navbar/topNavbar';
import Menu from './components/Menu/menu';
import Footer from './components/Footer/footer';
import ScrollToTop from './components/ScrollToTopScreen/scrollToTop'


// Pages imports
import Blogs from "./Pages/Blogs/blogs";
import Home from "./Pages/Home/home";
import About from "./Pages/About Me/aboutMe";
import CoachingMain from "./Pages/Coaching/Coaching Main/coachingMain";
import Contact from "./Pages/Contact/contact";
import Speaking from './Pages/Speaking/speaking';
import Testimonials from './Pages/Testimonials/testimonials';
import CoachingDetails from './Pages/Coaching/Coaching Details/coachingDetails';
import BlogsDetails from './Pages/Blogs/Blogs Details/blogsDetails';
import FundingCorner from './Pages/Funding Corner/fundingCorner';

// App css import
import "./app.scss";

// react imports
import { useState } from "react";

// Navigation imports
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (

    <div className="app">
      <Router>
        <TopNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/about-me" component={About} />
          <Route exact path="/coaching-main" component={CoachingMain} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/speaking" component={Speaking} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/coaching-details" component={CoachingDetails} />
          <Route exact path="/blogs-details" component={BlogsDetails} />
          <Route exact path="/funding-corner" component={FundingCorner} />
        </Switch>
        <Footer />
      </Router>
    </div>



  );
}

export default App;
