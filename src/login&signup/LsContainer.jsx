import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import './lscontainer.css'

function LsContainer({children}) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' })
  return (
    <Container>
       <Row className={isTabletOrMobile?'login-rowres':'login-row'}>
           <h1 className={isTabletOrMobile?'login-headres':'login-head'}>LinkUp</h1>
           <Col className={isTabletOrMobile?'login-colres':'login-col'}>
             {children}
           </Col>
          <h1>Start & Enjoy LinkUP</h1>
       </Row>
    </Container>
  )
}

export default LsContainer
