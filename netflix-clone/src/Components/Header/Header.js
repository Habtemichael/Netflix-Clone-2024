import React from 'react'
import "./Header.css"
import NetflixName from "../Asset/images/NetflixName.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <>
      <div className='header_outer_container'>
        <div className='header_container'>
            <div className="header_left">
                <ul>
                    <li><img className='netflix-img' src={NetflixName} alt="NetflixName"width={"100"} /></li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="headericons">
                <ul className="headericons" >
                    <li><SearchIcon /></li>
                    <li><NotificationsNoneIcon/></li>
                    <li><PersonOutlineIcon/></li>
                    <li><ArrowDropDownIcon/></li>
                </ul>
            </div>
        </div>
    </div>

    </>
  )
}

export default Header;
