import React from 'react'
import { Routes, Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
function Header() {
  return (
    <div>
      <div className="header">
        <div className="home--link">
          <NavLink className="home" to="/home">
            Home
          </NavLink>
        </div>
        <div className='sign--link'>
          <NavLink className="signin" to="/signin">
            SignIn
          </NavLink>
          <NavLink className="signup" to="signup">
            SignUp
          </NavLink>
          <NavLink className="signout" to="/home">
            SignOut
          </NavLink>
        </div>
      </div>
      <div className="contents">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  )
}

export default Header
