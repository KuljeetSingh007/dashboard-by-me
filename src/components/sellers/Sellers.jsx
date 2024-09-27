import React from 'react'
import "./Sellers.css";
import { userImages } from "../../data/data";
import { BsArrowRightShort } from 'react-icons/bs';

export default function Sellers() {
    console.log("Users array", userImages)

    const clickMe = (ele) => {
        console.log("element " + ele + " clicked");
    }


    return (
        <div className='sellers flex'>

            <div className="card-sellers">
                <div className="title-bar flex">
                    <h3>Top Sellers</h3>
                    <button className='flex mybtn'>See All
                        <span className='flex aero'>
                            <BsArrowRightShort className='icon ' />
                        </span>
                    </button>

                </div>

                <div className="top-sellers flex box">
                    <ul className='userImg-box flex'>
                        {

                            userImages.map((item, id) => {
                                return (
                                    <li key={id} className='imgItem ' onClick={() => { return clickMe(id) }}>
                                        <img className='images' src={item} alt="userImg" />
                                    </li>
                                )
                            })

                        }


                    </ul>
                    <div className='sold-record'>
                        <p className='bold'>532 Headphones sold</p>
                        <p className='text'>21 Sellers <span className='bold text'>7 days</span></p>
                    </div>



                </div>

            </div>

            <div className="card-sellers">
                <div className="title-bar flex">
                    <h3>Featured Sellers</h3>
                    <button className='flex mybtn'>See All
                        <span className='flex aero'>
                            <BsArrowRightShort className='icon ' />
                        </span>
                    </button>
                </div>

                <div className="featured-sellers flex box">
                    <ul className='flex userImg-box'>
                        {

                            userImages.map((item, id) => {
                                return (
                                    <li key={id} className='imgItem '>
                                        <img className='images' src={item} alt="userImg" />
                                    </li>
                                )
                            })

                        }


                    </ul>
                    <div className='sold-record '>
                        <p className='bold'>1,482 Headphones sold</p>
                        <p className='text'>38 Sellers <span className='bold text'>31 days</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
