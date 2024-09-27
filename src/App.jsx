import React from 'react'
import './App.css';
import Sidebar from './components/sidebar/SideBar';
import Home from './components/Home/Home';
export default function App() {
  return (
    <div className='parent-box'>
      <Sidebar />
      <Home />
    </div>
  );
}
