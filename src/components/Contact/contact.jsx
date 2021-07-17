import "./contact.scss"

// React imports
import { useState } from "react";

// Images import
import shake from "../../images/shake.svg";

export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    const [message, setMessage] = useState(false);

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={shake} />
            </div>
            <div className="right">
                <h2>Contact</h2>
                {message && <span>Your request sent successfully!!</span>}
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message/Description"></textarea>
                    <button>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    )
}
