import "./blogsDetails.scss";

// Images imports
import blog_1 from "../../../images/blog_1.png";

export default function blogsDetails() {
    return (
        <div className="blogs-details">
            {/* Blog Section 1 */}
            <div className="section1-container">
                {/* Image */}
                <div className="left">
                    <div className="image-container">
                        <img src={blog_1} />
                    </div>

                </div>

                {/* Short info section */}
                <div className="right">
                    <h5>Date - 07.07.2021</h5>
                    <h2>This is the title of the blog.</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!</p>
                </div>
            </div>

            {/* Main info section */}
            <div className="info-container">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!<br /><br /></p>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!<br /><br /></p>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!<br /><br /></p>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!<br /><br /></p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!<br /><br /></p>
            </div>

        </div>
    )
}
