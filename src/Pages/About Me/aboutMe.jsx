import "./aboutMe.scss";

// Images import
import jack_aeroplane from "../../images/jack_aeroplane.jfif";
import jack_round from "../../images/jack_round.jfif";

export default function aboutMe() {
    return (
        <div className="aboutMe" id="aboutMe">
            {/* <h1>About</h1> */}

            <div className="image-container">
                <img src={jack_aeroplane} />
            </div>


            {/* Section Container */}
            <div className="about-container">
                {/* Left */}
                <div className="left">
                    <div className="image-container">
                        <img src={jack_round} />
                    </div>
                </div>

                {/* Right */}
                <div className="right">
                    <div className="info-container">
                        <h3>Global business start-up coach at Universities and Business Schools in the EU. Advisor, NED and Mentor to SMEs.</h3>
                        <h5>Wootton, England, United Kingdom</h5>
                        <p>
                            Is a global CEO and Board of Directors advisor, leadership, entrepreneurship and motivational speaker, and university lecturer with several research universities in the UK and Europe. He advises C-level executives, government agencies, non-profits as he is an outstanding problem solver and lateral thinker – nothing is impossible in his book. Jack has spoken at hundreds of national and international business and inward investment seminars, workshops, conferences including TEDx. He is a finalist of UK’s national BBC TV “My story”, hosted by Ronan Keating with his first business success; BMED Airlines. He lectures on international business management, entrepreneurship, Intrapreneurship, leadership and Air Transport Management. Jack hosts and organises university business challenges and helping to launch the successful candidates’ in business.

                            An ambitious character since birth, Jack has managed to achieve success, despite extreme odds against him, and here are few examples:

                            Single handedly, orchestrated and managed to obtain Heathrow Airport Landing and Take-Off Slots, to run daily passenger airline services for FREE. These airport slots currently worth over £70 million ($87 million)

                            Raised £6 million in equity funding, to launch his first ever business venture, although he was living on social benefits, no money to his name, no experience in either finance or fund raising and a poor finance score to complement.

                            Established the third “virtual” passenger airline company in the UK, after EasyJet and Debonair. The airline owned only the office desks and chairs and didn’t even has its own airline license. Took him six months from writing the plan on a “napkin” in a coffee shop to having the first commercial flight taking off.

                            Masterminded the “original” strategy which led his first airline venture, British Mediterranean Airways (BMED) being franchised to British Airways (according to original business plan and within 2 years from launch) despite the fact that the airline operated only one Aircraft (Airbus A320) and with 65 staff and no long-term operating track record.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
