import "./coaching.scss";

import { useHistory } from "react-router-dom";

// Images import
import business from "../../images/business.png";
import cross_culture from "../../images/cross-culture.png";
import entrepreneur_2 from "../../images/entrepreneur_2.png";
import life_journey from "../../images/life_journey.jpg";


export default function Coaching() {

    let history = useHistory();
    return (
        <div className="coaching" id="coaching">
            <h1>Coaching</h1>
            <p>Life is a learning and experience journeys, what better source of support and guidance is there but of those that have been there, done it and has experienced the good, the bad and the ugly! If you need to learn from the best, then click here-below:</p>

            {/* Grid */}
            <div className="grid-container">
                <div onClick={() => history.push("/coaching-details")} className="card">
                    <div className="card-image-container">
                        <div className="card-image">
                            <img src={business} />
                        </div>
                    </div>
                    <div className="card-info">
                        <h2>Innovative Leadership Proficiency</h2>
                        <p>Learn how to become an effective leader with skills that are timeless and super effective especially in times of crisis. Leadership traits are by nature hard to learn if you were not born as one, therefore rather than go along the hard, long way to adept learn from our experiences. We know how to instil in you theses effective traits without spending years on learning and breaking the bank in the process!</p>
                    </div>
                </div>

                <div onClick={() => history.push("/coaching-details")} className="card">
                    <div className="card-image-container">
                        <div className="card-image">
                            <img src={business} />
                        </div>
                    </div>
                    <div className="card-info">
                        <h2>Business</h2>
                        <h3>Practical "Plan B" Planning</h3>
                        <p>Covid, banking crisis, lockdowns, double dip-recessions and geopolitics are causing a major re-think and planning amongst all industries globally. Relying on outdated processes and strategies are no longer viable, to survive the current and next challenge(s) “proper” proven planning and guidance are essential. This is where I could help. Learn how to navigate your business through difficult times and more importantly how to be prepared for the next “unknown”. I have been there, studied the effects of major shocks, with key academics and industrialists, such as COVID and now can arm you with appropriate technique to develop winning strategies and processes not only to be succeed and be prepared but also to create an efficient and realistic Plan B (just in case).</p>
                    </div>
                </div>

                <div onClick={() => history.push("/coaching-details")} className="card">
                    <div className="card-image-container">
                        <div className="card-image">
                            <img src={cross_culture} />
                        </div>
                    </div>
                    <div className="card-info">
                        <h2>Cross cultural intelligence</h2>
                        <p>Seems amazingly easy to handle, however, the reverse is true! What is challenging is a) understanding what is cross cultural intelligence and b) how to master its ”new” art of controlling it and finally how to teach, train and motivate your team(s) once and for all!</p>
                    </div>
                </div>

                <div onClick={() => history.push("/coaching-details")} className="card">
                    <div className="card-image-container">
                        <div className="card-image">
                            <img src={entrepreneur_2} />
                        </div>
                    </div>
                    <div className="card-info">
                        <h2>Successful entrepreneurship</h2>
                        <p>Not everyone with an idea is an entrepreneur, not every entrepreneur will be a successful business person. How can one be sure that their idea(s) is the right one? How do they know it will work but more importantly with make money! How can one retain ownership and control when fundraising, how to select the right “key” team members? How to test yourself (more of an internal audit or due diligence) before investing valuable time, energy and resources.</p>
                    </div>
                </div>

                <div onClick={() => history.push("/coaching-details")} className="card">
                    <div className="card-image-container">
                        <div className="card-image">
                            <img src={life_journey} />
                        </div>
                    </div>
                    <div className="card-info">
                        <h2>Life's journey coaching</h2>
                        <p>How can you unleash your latent potential and create “meaningful” sustainable change. How to unlock blocks that clouds one’s creativity and effective decision making. We understand the challenges that people go through and will help them find a way to reach their life objectives. We go through these processes together and construct a positive learning journey that is long-lasting and with transferable outcomes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
