import React from 'react';
import "./Activity.css";
import Button from "../button/Button";
import { customers } from "../../data/data";


export default function Activity() {
    return (
        <div className='activity '>
            <div className="activity-top flex">
                <h2>Recent Activitty</h2>
                <Button />
            </div>

            <ul className="flex order-list-box">
                {
                    customers.map((item, id) => {
                        return (
                            <li key={id} className='list-item'>
                                <img className='img-user' src={item.image} alt="Userimg" />
                                <div className="msg-box">
                                    <p>{item.content}</p>
                                    <span>{item.duration}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}
