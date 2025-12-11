import React from 'react'
import profileImg from "../../assets/images/EDON.JPG";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
          <header className="py-4 header-bar">
            <div className="container d-flex flex-wrap justify-content-between align-items-center">
              <Link to="/" className="fs-3 m-0 blog-title">Edon’s Tech Blog</Link>
    
              <div className="d-flex align-items-center gap-2 seperate">
                <span>by</span>
                <a href="https://www.linkedin.com/in/edon-aliu-78b086265/">
                  <img src={profileImg} alt="Profile" className="profile-img" />
                </a>
              </div>
            </div>
          </header>
  )
}

export default Navbar