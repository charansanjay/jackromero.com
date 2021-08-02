import "./aboutMe.scss";

// React imports
import { useEffect, useRef } from "react";

// 3rd party imports
import { init } from "ityped";

// Navigation imports
import { Link } from "react-router-dom";

// Images import
import jack_1 from "../../images/jack_8.png";


export default function AboutMe() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            strings: ["An Entrepreneur", "A Global Business Start-Up Coach", "An Educator"],
            backDelay: 1500,
            backSpeed: 60,
            startDelay: 0,
        });
    }, [])

    return (
        <div className="about-me" id="about_me">
            <div className="left">
                <div className="imgContainer">
                    <img src={jack_1} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Jack Romero</h2>
                    <h1>I am</h1>
                    <h4><span ref={textRef}></span></h4>
                    <p>Entrepreneur, Educator and an Investor. Established several businesses from scratch and without any experience, learned the ropes, the hard way, and now is helping budding entrepreneurs achieve the same success without the stress, the traps and frustrations, through training, mentoring, educating and investing.<br/><br/>
                        On a mission to help alleviate poverty, worldwide, through start-up business enterprises and cutting edge educational processes.
                        Creating and fostering mutually beneficial partnerships with key organisations (charitable, professional, social and educational) to fulfil philanthropic ambitions, whilst meeting global needs for sustainability, environmental ambitions and health improvements.
                    </p>
                    <a><Link to="/about-me">Know more</Link></a>
                </div>
            </div>
        </div>
    )
}
