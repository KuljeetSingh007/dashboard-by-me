import React from 'react'
import { BsQuestionCircle } from 'react-icons/bs'
import "./HelpCenter.css";
export default function HelpCenter() {
    return (
        <div className='helpCenter'>
            <BsQuestionCircle className='quesIcon' />
            <div className="container ">

                <div className="circle1"></div>
                <div className="circle2"></div>


                <div className='helpCenter-content'>
                    <h3>Help Center</h3>
                    <p>Having any troubles, please contact us for more questions</p>
                    <button className='btn'>Go to help center</button>
                </div>
            </div>
        </div>
    )
}
