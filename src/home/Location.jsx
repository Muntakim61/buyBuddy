import React from 'react'
import { Link } from 'react-router-dom'

const title = "More Then 60,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
    {
        imgUrl: '/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'USA',
    },
    {
        imgUrl: '/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Denmark',
    },
    {
        imgUrl: '/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Kazakhstan',
    },
    {
        imgUrl: '/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Brazil',
    },
    {
        imgUrl: '/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'South Africa',
    },
    {
        imgUrl: '/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Malaysia',
    },
    {
        imgUrl: '/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Russia',
    },
]

const Location = () => {
    return (
        <div className='clients-section style-2 padding-tb'>
            <div className='container'>
                <div className='section-header text-center'>
                    <h2 className='title'>{title}</h2>
                    <p>{desc}</p>
                </div>
                {/*main content */}
                <div className='section-wrapper'>
                    <div className='clients'>
                        {
                            clientsList.map((val,i)=>(
                                <div key={i} className='client-list'>
                                    <Link to="/sign-up" className="client-content">
                                    <span>{val.text}</span>
                                    </Link>
                                    <div className='client-thumb'>
                                        <img src={val.imgUrl} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location