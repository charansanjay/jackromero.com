import "./testimonials.scss";

export default function Testimonials() {

    const data = [
        {
            id: "1",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut!",
            name: "Jasper",
            title: "Wiskat Limited",
            image: "assets/jack_1.jpg"
        },
        {
            id: "1",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut!",
            name: "Jack Romero",
            title: "CEO - Wiskat Limited",
            image: "assets/jack_1.jpg",
            featured: true,
        },
        {
            id: "1",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut!",
            name: "Charan Singh",
            title: "Wiskat Limited",
            image: "assets/charan_1.PNG"
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
