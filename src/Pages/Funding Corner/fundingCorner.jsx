import "./fundingCorner.scss";

import { useHistory } from "react-router-dom";

// Images imports
import blog_1 from "../../images/blog_1.png";
import cross_culture from "../../images/cross-culture.png";
import wiskat_website from "../../images/wiskat_website.PNG";

export default function FundingCorner() {

    const data = [
        {
            id: "1",
            company_name: "Wiskat Limited",
            company_logo: cross_culture,
            banner: blog_1,
            Location: "United Kingdom",
            company_info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!",
            email: "charan0625@gmail.com",
            phone: "+4915787947172",
            target_amount: " £200,000",
        },
        {
            id: "2",
            company_name: "Wiskat Limited",
            company_logo: cross_culture,
            banner: blog_1,
            Location: "United Kingdom",
            company_info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!",
            email: "charan0625@gmail.com",
            phone: "+4915787947172",
            target_amount: " £200,000",
        },
        {
            id: "3",
            company_name: "Wiskat Limited",
            company_logo: cross_culture,
            banner: blog_1,
            Location: "United Kingdom",
            company_info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!",
            email: "charan0625@gmail.com",
            phone: "+4915787947172",
            target_amount: " £200,000",
        },
        {
            id: "4",
            company_name: "Wiskat Limited",
            company_logo: cross_culture,
            banner: blog_1,
            Location: "UK",
            company_info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!",
            email: "charan0625@gmail.com",
            phone: "+4915787947172",
            target_amount: " £200,000",
        },
        {
            id: "5",
            company_name: "Wiskat Limited",
            company_logo: cross_culture,
            banner: blog_1,
            Location: "UK",
            company_info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!",
            email: "charan0625@gmail.com",
            phone: "+4915787947172",
            target_amount: " £200,000",
        },
        {
            id: "6",
            company_name: "Wiskat Limited",
            company_logo: cross_culture,
            banner: blog_1,
            Location: "UK",
            company_info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, aut quis nostrum officiis doloremque itaque vel ut accusamus explicabo aspernatur harum consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat um consequuntur quidem, quas reprehenderit dignissimos veritatis debitis corporis quaerat!",
            email: "charan0625@gmail.com",
            phone: "+4915787947172",
            target_amount: " £200,000",
        },
    ];

    let history = useHistory();
    return (
        <div className="funding-corner">
            <h1>Invest into the Future</h1>

            <p>Say something about this section.</p>

            <h3>Current Start-Ups Opportunities </h3>

            {/* Section 1 */}
            <div className="section1-container">
                <div className="left">
                    <div className="image-container">
                        <img src={wiskat_website} />
                    </div>
                </div>

                <div className="right">
                    {/* info */}
                    <div className="info-container">
                        <h4>
                            Who ?
                        </h4>
                        <p>An exclusive British Online Retail Platform, with more than 7 years in the making, originally borne out of a UK University student’s project, Wiskat.com stood to become a valuable member of the unique British symbols for excellence, authenticity of products and cross-cultural cooperation with planned expansion to include IT, AI and financial services with global aspirations.</p>

                        <h4>How?</h4>
                        <p>By adhering to the strict British and European Trading Standards, Wiskat.com is planning on becoming a trusted industry benchmark.</p>

                        <h4>Why?</h4>
                        <p>Wiskat is passionate about utilising its founder’s beliefs and assets to link, on equal basis, with all global trading partners, customers to jointly share experiences, develop, sell, promote and exchange online trading insights broadening knowledge base about respective cultures, passion for family, active and healthy lifestyles – with unrivalled services, fair partnerships and long-term friendships as our grand ambitions.</p>
                        <p>
                            Beliefs!
                            At Wiskat, family, wellness and healthy living is a way of life. We don’t believe age, gender or past actions define you, only your ambition and desire for family dedication, good health and wholeness... today.

                            We differentiate ourselves through unique partnerships with highly reputable suppliers, providing combinations of unique and primarily organic products with designs and styles merged with unequalled standards of quality and authenticity.

                            Our founders and staff have deep roots in fair trade, education and health communities and consequently our selections on Wiskat.com serve young and established families, their kids, home and of course their pets alike.

                            Where British and European trading standards, authentic products and quality are guaranteed.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="container">
                <h3>Start-ups need Funding</h3>

                <div className="section-container" >

                    {data.map((item) => (<div className="card">
                        <div className="image-container">
                            <img className="banner" src={item.banner} />

                        </div>

                        <div className="info">
                            <div className="info1">
                                <img className="logo" src={item.company_logo} />

                                <h5>{item.company_name}</h5>
                            </div>
                            <div className="info2">
                                <h5>{item.Location}</h5>

                                <p>Here comes a short description of the blog. Here comes a short description of the blog. Here comes a short description of the blog. Here comes a short description of the blog. Here comes a short description of the blog.</p>
                                <h2>Investment target: {item.target_amount}</h2>
                            </div>
                        </div>
                    </div>))}
                </div>

            </div>
        </div>
    )
}
