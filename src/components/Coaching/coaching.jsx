import "./coaching.scss";

import { useHistory } from "react-router-dom";

export default function Coaching() {

    let history = useHistory();
    return (
        <section className="coaching" id="coaching">
            <h1>Coaching</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, esse rem consectetur quia ad ipsa! Expedita ea assumenda voluptatum? Impedit facilis excepturi consequatur expedita error maiores mollitia labore placeat voluptate?</p>

            {/* Grid */}
            <div className="grid-container">
                <div onClick={() => history.push("/coaching-details")} className="card">
                    <div className="card-image-container">
                        <img src="assets/business.png" />
                    </div>
                    <h2>Business</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in quae ratione quo natus harum ducimus commodi! Magni deleniti inventore, exercitationem, molestias qui tempora repudiandae dolorem dolor eum, quos eveniet.</p>
                </div>

                <div onClick={() => history.push("/coaching-details")} className="card">
                    <div className="card-image-container">
                        <img src="assets/cross-culture.png" />
                    </div>
                    <h2>Cross cultural intelligence</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in quae ratione quo natus harum ducimus commodi! Magni deleniti inventore, exercitationem, molestias qui tempora repudiandae dolorem dolor eum, quos eveniet.</p>
                </div>

                <div onClick={() => history.push("/coaching-details")} className="card">
                    <div className="card-image-container">
                        <img src="assets/entrepreneur_2.png" />
                    </div>
                    <h2>Successful entrepreneurship</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in quae ratione quo natus harum ducimus commodi! Magni deleniti inventore, exercitationem, molestias qui tempora repudiandae dolorem dolor eum, quos eveniet.</p>
                </div>

                <div onClick={() => history.push("/coaching-details")} className="card">
                    <div className="card-image-container">
                        <img src="assets/life_journey.jpg" />
                    </div>
                    <h2>Life's journey coaching</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in quae ratione quo natus harum ducimus commodi! Magni deleniti inventore, exercitationem, molestias qui tempora repudiandae dolorem dolor eum, quos eveniet.</p>
                </div>
            </div>
        </section>
    )
}
