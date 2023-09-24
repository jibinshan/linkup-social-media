import React from 'react'
import Navbar from '../navbar/navbar'
import { useMediaQuery } from 'react-responsive'
import './islogin.css'
import { useNavigate } from 'react-router'

function Islogin() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' })
    const navigate = useNavigate()
  return (
     <Navbar>
        <div className={isTabletOrMobile ? 'isloginres' :'islogin'}>
            <button onClick={()=>navigate('/login')}>Login</button>
            <button onClick={()=>navigate('/signup')}>Signin</button>
        </div>
     </Navbar>
  )
}

export default Islogin
