import React from 'react';
import "./Sidebar.css";
import { sideBarItems } from "../../data/data";
import HelpCenter from '../help center/HelpCenter';
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="logo">
                <h2>Dashboard</h2>
            </div>


            <div className="menu-box">
                <ul>
                    {sideBarItems.map((item, id) => {
                        return (
                            <li key={id} className='item'>
                                <a href="/#" className='flex link'>
                                    <span className='icon'>{item.icon}</span>
                                    <span className='menu-text'>{item.title}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <HelpCenter />
        </div>
    )
}
