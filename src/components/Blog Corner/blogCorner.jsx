import "./blogCorner.scss";
import { useState } from "react";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Images imports
import blog_1 from "../../images/blog_1.png";
import blog_2 from "../../images/blog_2.png";
import blog_3 from "../../images/blog_3.png";
import arrow from "../../images/arrow.png";

export default function BlogCorner() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            blog_title: "This is Blog 1",
            img: blog_1,
            date: "July 01, 2021",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!"
        },
        {
            id: "2",
            blog_title: "This is Blog 2",
            img: blog_2,
            date: "July 01, 2021",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!"
        },
        {
            id: "3",
            blog_title: "This is Blog 3",
            img: blog_3,
            date: "July 01, 2021",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!"
        },
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);

    }

    return (
        <div className="blog-corner" id="blogs_corner">
            <h1>Blog Corner</h1>
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        {/* Blog 1 */}

                        <div className="item">
                            <div className="left">
                                <div className="left-container">
                                    <img src={d.img} />
                                </div>

                            </div>
                            <div className="right">
                                <div className="right-container">
                                    <p className="title">
                                        {d.blog_title}
                                    </p>

                                    {/* <h6>
                                        {d.date}
                                    </h6> */}

                                    <p className="description">{d.description}</p>

                                    <a href="../../Pages/Blogs/blogs.jsx">Read more..</a>

                                    {/* <p className="read-more"><strong>Read more..</strong></p> */}

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slider arrow image */}
            <img src={arrow} className="arrow left" onClick={() => handleClick("left")} />
            <img src={arrow} className="arrow right" onClick={() => handleClick("right")} />

        </div>
    )
}
