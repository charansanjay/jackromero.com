import "./blogs.scss";

import { useHistory } from "react-router-dom";

// Images imports
import blog_1 from "../../images/blog_1.png";
import blog_2 from "../../images/blog_2.png";
import blog_3 from "../../images/blog_3.png";

export default function Blogs() {

    const data = [
        {
            id: "1",
            blog_title: "This is Blog 1 hsdhhf fssaj fjslfjalf jsflafjsl fsfjsjl.",
            img: blog_1,
            date: "Date - July 01, 2021",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!"
        },
        {
            id: "2",
            blog_title: "This is Blog 2",
            img: blog_2,
            date: "Date - July 01, 2021",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!"
        },
        {
            id: "3",
            blog_title: "This is Blog 3",
            img: blog_3,
            date: "Date - July 01, 2021",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!"
        },
        {
            id: "4",
            blog_title: "This is Blog 4",
            img: blog_1,
            date: "Date - July 01, 2021",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!"
        },
        {
            id: "5",
            blog_title: "This is Blog 5",
            img: blog_2,
            date: "Date - July 01, 2021",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!"
        },
        {
            id: "6",
            blog_title: "This is Blog 6",
            img: blog_3,
            date: "Date - July 01, 2021",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!"
        },
    ];

    let history = useHistory();


    return (
        <div className="blogs" id="blogs">

            {/* Heading */}
            <h1>Blogs</h1>

            {/* Blog Section 1 */}
            <div className="section1-container">
                {/* Image */}
                <div className="left">
                    <div onClick={() => history.push("/blogs-details")} className="image-container">
                        <img src={blog_1} />
                    </div>

                </div>

                {/* info section */}
                <div className="right">
                    <h5>Date - 07.07.2021</h5>
                    <h2>This is the title of the blog.</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!</p>
                    <button onClick={() => history.push("/blogs-details")}>Read More</button>
                </div>
            </div>

            {/* Blog Section 2 */}
            <div className="section2-container">
                <div className="card">
                    <div className="image-container">
                        <img src={blog_2} />
                    </div>

                    <div className="info">
                        <h5>Date - 07.07.2021</h5>
                        <h2>This is the title of the blog.</h2>
                        <p>Here comes a short description of the blog. Here comes a short description of the blog. Here comes a short description of the blog. Here comes a short description of the blog. Here comes a short description of the blog.</p>
                        <button onClick={() => history.push("/blogs-details")}>Read More</button>
                    </div>
                </div>

                <div className="card">
                    <div className="image-container">
                        <img src={blog_3} />
                    </div>

                    <div className="info">
                        <h5>Date - 07.07.2021</h5>
                        <h2>This is the title of the blog.</h2>
                        <p>Here comes a short description of the blog. Here comes a short description of the blog. Here comes a short description of the blog. Here comes a short description of the blog. Here comes a short description of the blog.</p>
                        <button onClick={() => history.push("/blogs-details")}>Read More</button>
                    </div>
                </div>
            </div>

            {/* All blogs Section */}
            <div className="section3-container">
                <div className="heading">
                    <h3>All Blog Posts</h3>
                </div>

                <div className="all-blogs-container">
                    {data.map((d) => (<div className="card">
                        <div className="image-container">
                            <img src={d.img} />
                        </div>

                        <div className="info">
                            <h5>{d.date}</h5>
                            <h2>{d.blog_title}</h2>
                            {/* <p>{d.description}</p> */}
                            <button onClick={() => history.push("/blogs-details")}>Read More</button>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    )
}
