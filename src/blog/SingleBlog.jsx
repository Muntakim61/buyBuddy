import React from 'react'
import { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const SingleBlog = () => {

    const [blog, setBlog] = useState(blogList);
    const { id } = useParams();

    //console.log(id)

    const result = blog.filter((b) => b.id === Number(id));
    console.log(result[0]);

    const desc = "An online shop is a digital platform that allows customers to browse, select, and purchase products or services from the comfort of their home. Unlike traditional brick-and-mortar stores, online shops offer the convenience of 24/7 accessibility, diverse payment options, and global reach. These platforms typically feature detailed product descriptions, high-quality images, and customer reviews to enhance the shopping experience. With secure payment systems and fast shipping options, online shops cater to the needs of modern consumers looking for efficiency and variety. Whether it's fashion, electronics, or groceries, online shops provide a seamless and personalized way to shop.";
    const desc2 = "There is only one boss. The customer. And he can fire everybody in the company from the chairman on down, simply by spending his money somewhere else.";
    const desc3 = "Online shopping has revolutionized the way people purchase goods and services, offering unparalleled convenience and accessibility. With just a few clicks, consumers can browse a vast selection of products, compare prices, read reviews, and make purchases from the comfort of their homes. This digital marketplace operates 24/7, eliminating the constraints of traditional store hours and geographical limitations. "
    const desc4 = "Additionally, online shopping often provides access to exclusive deals, discounts, and a wider range of products than physical stores. However, it also comes with challenges, such as concerns about data security, delivery delays, and the inability to physically inspect items before buying. Despite these drawbacks, the ease and efficiency of online shopping continue to make it a dominant force in the modern retail landscape."
    const desc5 = "Online shopping is the process of buying products or services over the internet. It allows people to browse a wide variety of items from different stores without leaving their homes. Shoppers can easily compare prices, read reviews, and make purchases using a computer or smartphone. Payment is usually made through credit cards, digital wallets, or other online methods. After the purchase, the items are typically delivered to the buyer’s address. Online shopping is convenient, saving time and offering a wide range of options."

    const socialList = [
        {
            link: "#",
            iconName: "icofont-facebook",
            className: "facebook",
        },
        {
            link: "#",
            iconName: "icofont-twitter",
            className: "twitter",
        },
        {
            link: "#",
            iconName: "icofont-linkedin",
            className: "linkedin",
        },
        {
            link: "#",
            iconName: "icofont-instagram",
            className: "instagram",
        },
        {
            link: "#",
            iconName: "icofont-pinterest",
            className: "pinterest",
        },
    ];

    return (
        <div>
            <PageHeader title={"Single Blog Page"} curPage={"Blog /Blog Details"} />

            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt="" className='w-100' />
                                                                </div>

                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className="lab-ul">

                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                                                ))
                                                                            }

                                                                        </ul>
                                                                    </div>
                                                                    <p>{desc}</p>
                                                                    <blockquote>
                                                                        <p>{desc2}</p>
                                                                        <cite>
                                                                            <a href="#">~Sam Walton (Founder of Walmart)</a>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <p>{desc3}</p>
                                                                    <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                                                    <p>{desc4}</p>

                                                                    <div className="video-thumb">
                                                                        <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                        <a href="https://youtu.be/PGuKjkdGrEI?si=lF0CJJ6khm6Nx46O" className='video-button popup' target='_blank'>
                                                                            <i className='icofont-ui-play'></i>
                                                                        </a>
                                                                    </div>

                                                                    <p>{desc5}</p>

                                                                    <div className="tags-section">
                                                                        <ul className="tags lab-ul">
                                                                            <li>
                                                                                <a href="#">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Bussiness</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Personal</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="lab-ul social-icons">
                                                                            {
                                                                                socialList.map((val, i) => (
                                                                                    <li key={i}>
                                                                                        <a href="#" className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>

                                            <div className='navigations-part'>
                                                <div className="left">
                                                    <a href="#" className='prev'>
                                                        <i className='icofont-double-left'></i>Previous Blog
                                                    </a>
                                                    <a href="#" className='title'>
                                                        Evisculate parralel processes via Technical sound Model Authoritative
                                                    </a>
                                                </div>
                                                <div className="right">
                                                    <a href="#" className='prev'>
                                                        <i className='icofont-double-right'></i>Next Blog
                                                    </a>
                                                    <a href="#" className='title'>
                                                        Evisculate parralel processes via Technical sound Model Authoritative
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="col-lg-4 col-12">
                            <aside>
                                <Tags/>
                                <PopularPost/>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog