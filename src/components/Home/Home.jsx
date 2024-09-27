import React from 'react'
import './Home.css';
import Navbar from '../navbar/Navbar';
import Main from '../main/Main';
export default function Home() {
    return (
        <div className='home'>
            <Navbar />
            <Main />
        </div>
    )
}
