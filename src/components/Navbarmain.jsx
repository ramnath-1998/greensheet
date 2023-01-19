import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Navbarleft from './Navbarleft'
import Navbarright from './Navbarright'

const Navbarmain = () => {
  return (
    <div className='navbargreensheet'>
      <Row className='justify-content-center'>
        <Col className='col-md-8'>

          <Navbarleft></Navbarleft>

        </Col>

        <Col className='col-md-4'>
          <Navbarright></Navbarright>
        </Col>

      </Row>
    </div>
  )
}

export default Navbarmain