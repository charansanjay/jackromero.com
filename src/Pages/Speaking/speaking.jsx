import "./speaking.scss";

// Components imports
import Speaking from "../../components/Speaking/speaking";
import YoutubeEmbed from "../../components/YoutubeEmbed/youtubeEmbed";

export default function speaking() {
    return (
        <div className="speaking">
            {/* <Speaking/> */}
            <YoutubeEmbed embedId="oM1qx7-dNOs" />

            {/* Other Videos section */}
            <div className="other-videos-container">
                {/* <div className="other-videos">
                    <YoutubeEmbed embedId="oM1qx7-dNOs" />
                </div> */}
                <div className="other-videos">
                    <YoutubeEmbed embedId="To3mXjUYjRk" />
                </div>
                <div className="other-videos">
                    <YoutubeEmbed embedId="Vo4t7J1ukZU" />
                </div>
                <div className="other-videos">
                    <YoutubeEmbed embedId="9Kvkrf7kSCs" />
                </div>
            </div>
        </div>
    )
}
