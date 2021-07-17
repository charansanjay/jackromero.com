import "./testimonials.scss";

// Images import
import jack_1 from "../../images/jack_1.jpg";
import charan_1 from "../../images/charan_1.PNG";


export default function Testimonials() {

    const data = [
        {
            id: "1",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut!",
            name: "Jasper",
            title: "Wiskat Limited",
            image: jack_1,
        },
        {
            id: "1",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut!",
            name: "Jack Romero",
            title: "CEO - Wiskat Limited",
            image: jack_1,
            featured: true,
        },
        {
            id: "1",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut!",
            name: "Charan Singh",
            title: "Wiskat Limited",
            image: charan_1,
        }
    ]


    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>

            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ?  "card featured" : "card"}>
                        <div className="top">
                            {/* <img src="assets/right-arrow.png" className="left" alt="" /> */}
                            <img src={d.image} className="user" alt="" />
                            {/* <img src="assets/right-arrow.png" className="right" alt="" /> */}
                        </div>
                        <div className="center">
                            {d.description}
                        </div>
                        <div className="bottom">
                            {/* Name */}
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>))}
            </div>

        </div>
    )
}
