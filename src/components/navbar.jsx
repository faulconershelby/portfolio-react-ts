import '../CSS/animation.css'
import '../CSS/navbar.scss'
import { React, useState } from 'react'

// @to-do add focus to spans

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <div class = "navbar">
      <h1> <div id="nav-icon1" className = {open ? 'open': null} onClick = { () => {
        setOpen(!open)}
      }>
        <span/>
        <span/>
        <span/>

        </div>
      </h1>
      <ul id="navs" className = {open ? 'navigation-open': 'navigation-close'}>
        <li><a href = "#"> Home </a></li>
        <li><a href = "#"> About </a></li>
        <li><a href = "#"> Contact </a></li>
        <li><a href = "#"> Portfolio </a></li>
      </ul>
    </div>
  );
};


export default Navbar;