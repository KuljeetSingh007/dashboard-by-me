import React from 'react'
import './Navbar.css';
import { BiSearchAlt } from 'react-icons/bi'
import { FaRegComment } from 'react-icons/fa'
import { IoMdNotificationsOutline } from 'react-icons/io'
import user1 from "../../assets/user1.jpg"; 

export default function Navbar() {
    return (
        <div className='navbar flex'>
            <div className="welcome-box">
                <h2>welcome to Dashboard</h2>
                <p>Hello Sir, Welcome Back</p>
            </div>


            <div className="search-box flex">
                <input type="text" placeholder='Search dashboard' className='searchField' />
                <BiSearchAlt />
            </div>

            <div className="options-box">
                <span className='option flex'>  <FaRegComment /></span>
                <span className='option flex'> <IoMdNotificationsOutline  /></span>
                <span className='user flex'><img src={user1} alt="" /></span>
            </div>


        </div>
    )
}
