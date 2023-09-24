import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import {AiFillHome,AiFillPlusSquare} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import Avatar from './Avatar'
import './navbar.css'
import { useNavigate } from 'react-router'

function Navbar({children}) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' })
    const navigate = useNavigate()
  return (
    <Container>
    <Row>
        <Col className={isTabletOrMobile?'navbar-colres':'navbar-col'}>
          <div className={isTabletOrMobile ? 'logores':'logo'}><h1>LinkUp</h1></div>
         {isTabletOrMobile ?  children : ''}
          <div className={isTabletOrMobile ? 'contentres':'content'}>
            <h2 onClick={()=>navigate('/home')}>
               <AiFillHome/>
               {isTabletOrMobile ? '':'HOME'} 
            </h2>
            <h2 onClick={()=>navigate('/search')}>
                <BiSearch/>
                {isTabletOrMobile ? '' : 'SEARCH'}
            </h2>
            <h2 onClick={()=>navigate('/add')}>
                <AiFillPlusSquare/>
                {isTabletOrMobile ? '' : 'CREATE'}
            </h2>
            <h2 onClick={()=>navigate('/profile')}>
                <Avatar/>
                {isTabletOrMobile ? '' : 'PROFILE'}
            </h2>
            {isTabletOrMobile ? '' : 
             <h2 onClick={()=>navigate('/login')}>
             Logout
         </h2>
            }
          </div>
          </Col>
          {isTabletOrMobile ? '' :
           
          children
          
          }
          {isTabletOrMobile ? '' :
    <div className="third-colum">
    <h1>CONNECT THE WORLD</h1>
  <p>
     LinkUp is your ultimate social media destination, bringing people closer, one connection at a time. Discover, connect, and share your world with LinkUp, where connecting with friends, family, and new acquaintances has never been easier.
    </p> 
    
  </div>
    }
    </Row>
 </Container>
  )
}

export default Navbar
