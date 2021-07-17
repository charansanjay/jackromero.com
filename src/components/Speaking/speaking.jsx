import "./speaking.scss";

// Navigation imports
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//Components import
import YoutubeEmbed from "../YoutubeEmbed/youtubeEmbed";

export default function Speaking() {
    return (
        <div className="speaking" id="speaking">
            {/* <h1>Speaking</h1> */}
            <YoutubeEmbed embedId="oM1qx7-dNOs" />
            <Link to="/speaking" className="link"><p>Watch more -></p></Link>
        </div>
    )
}