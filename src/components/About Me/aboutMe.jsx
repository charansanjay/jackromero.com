import "./aboutMe.scss";

// React imports
import { useEffect, useRef } from "react";

// 3rd party imports
import { init } from "ityped";

// Navigation imports
import { Link } from "react-router-dom";

//Configurations import
import CfgImages from "../../config/images";
import jack_1 from "../../images/jack_1.jpg";


export default function AboutMe() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            strings: ["An Entrepreneur", "A Global Business start-up coach"],
            backDelay: 1500,
            backSpeed: 60,
            startDelay: 0,
        });
    },[])

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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, eum? Consectetur saepe nemo omnis vitae? Facilis molestiae praesentium impedit quibusdam eligendi soluta, voluptate consectetur. Aliquid possimus pariatur voluptatum fugit assumenda! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, eum? Consectetur saepe nemo omnis vitae? Facilis molestiae praesentium impedit quibusdam eligendi soluta, voluptate consectetur. Aliquid possimus pariatur voluptatum fugit assumenda!</p>
                    <a><Link to="/about-me">Know more</Link></a>
                </div>
            </div>
        </div>
    )
}
