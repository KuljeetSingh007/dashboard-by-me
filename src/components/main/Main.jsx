import React from 'react';
import './Main.css';
import HelpCenter from '../help center/HelpCenter';
import { BsArrowRightShort } from 'react-icons/bs';
import Products from '../products/Products';
import Sellers from '../sellers/Sellers';
import Activity from '../activity/Activity';

export default function Main() {
    return (
        <div className='main flex'>
            <div className='upperBox flex'>

                <div className="banner">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, laudantium.</p>
                    <div className="btn-box">
                        <div className="btn1 flex">Explore more</div>
                        <div className="btn1 outline  flex">Top Selectors</div>
                    </div>
                </div>
                <div className='stat-help'>

                    <div className="stat">
                        <h2>My Stat</h2>
                        <div className="stat-child flex">

                            <div className='record'>
                                <p>Today </p>
                                <span>5 orders</span>
                            </div>

                            <div className='record'>

                                <p>This month</p>
                                <span>548 orders</span>

                            </div>
                        </div>

                        <a className='flex' href="/#"> Go to my orders <BsArrowRightShort className='icon arrow' /> </a>

                    </div>


                    <HelpCenter />


                </div>

            </div>

            <div className="lowerBox flex">
                <div className="lower-left">
                    <Products />
                    <Sellers />
                </div>
                <div className="lower-right">
                    <Activity />
                </div>
            </div>
        </div>
    );
}