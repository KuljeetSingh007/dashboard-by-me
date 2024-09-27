import React from 'react'
import './Button.css';
import { BsArrowRightShort } from 'react-icons/bs';

export default function Button() {
    return (
        <button className='mybtn flex'>See All <span className='flex '> <BsArrowRightShort className='icon' /></span></button>

    )
}
