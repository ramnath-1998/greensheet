import React from 'react'
import Navbarbutton from './Navbarbutton'
import { Col, Row } from 'react-bootstrap'

const Navbarleft = () => {
  return (

    <div className='nav-left-greensheet'>
<Row className='h-100'>
  <Col className='col-md-12 h-100'>

<Navbarbutton pageName="Home"></Navbarbutton>
<Navbarbutton pageName="Bonds"></Navbarbutton>
<Navbarbutton pageName="Projects"></Navbarbutton>
<Navbarbutton pageName="About"></Navbarbutton>
<Navbarbutton pageName="Demo Page"></Navbarbutton>

</Col>
</Row>


    </div>
  )
}

export default Navbarleft
