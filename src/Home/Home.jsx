import React from 'react'
import Navbar from '../navbar/navbar'
import { useMediaQuery } from 'react-responsive'

import './home.css'
import Post from './Post'

function Home() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' })
  
  return (

    <Navbar>
    <div className={isTabletOrMobile ? 'homeres':'home'}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      
  </div>
    {/* {isTabletOrMobile ? '' :
    <div className="third-colum">
    <h1>CONNECT THE WORLD</h1>
  <p>
     LinkUp is your ultimate social media destination, bringing people closer, one connection at a time. Discover, connect, and share your world with LinkUp, where connecting with friends, family, and new acquaintances has never been easier.
    </p> 
    
  </div>
    } */}
  </Navbar>
  
  )
}

export default Home
