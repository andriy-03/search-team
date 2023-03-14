import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"
import "../components/SearchBar.css"
import InputSearch from "./InputSearch";
import TeamsData from "../data/TeamsData.json"

function Navbar() {
  return (
    <>
    <div className='wrapper-content'>
      <div className='nav-elements'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><a href='/'>Telegram</a></li>
      </ul>
      </div>
      
    </div>
    
    <div className='search-bar'>
      <InputSearch placeholder='Search team' data={TeamsData} />
      </div>
      </>
  )
}

export default Navbar