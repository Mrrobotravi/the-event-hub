import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-light text-center py-3">
    <div className="container">
      <h3>THE EVENT HUB</h3> <br/>
      <div className="row">
        <div className="align-items-center">
        
          <a href="/" className="text-light  me-4"><InstagramIcon/></a>
          <a href="/" className="text-light   me-4"><TwitterIcon/></a>
          <a href="/" className="text-light  me-4"><FacebookIcon/></a>
          <a href="/" className="text-light  me-4"><LinkedInIcon/></a>
        </div><br/> <br/>
        <div className="align-items-center">
          
          <p className="mb-0">&copy; 2023   The Event Hub. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}
