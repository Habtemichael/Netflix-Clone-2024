import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css"
        
const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
            <FacebookOutlinedIcon className='fb_icon'/>
          <InstagramIcon/>
          <YouTubeIcon className='youtube_icon'/>
        </div>
        <div className='footer_data'>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Inverstor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Content Use</li>
            </ul>
          </div>
        </div>
        <br></br>
        <div className='Service_code'>
          <p> Service Code</p>
        </div>
        <div className='copy_write'>
          &copy;  1997-2024 Netflix, Inc.
        </div>
      </div>
    </div>
  )
}

export default Footer;
