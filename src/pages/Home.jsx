import React from 'react'
import Sdgimage from '../components/Sdgimage'
import Stats from '../components/Stats'
import NavbarMain from '../components/Navbarmain'
import { Col, Row } from 'react-bootstrap'
const Home = () => {
    return (



        <div className='stats'>

        <Row className='justify-content-center'>

        <Col className='col-md-8'>
        <Stats></Stats>
        </Col>
        </Row>
        <Row>

        <Col className='col-md-8'>

        <Sdgimage></Sdgimage>

        </Col>

        </Row>
        </div>
        )
    }

    export default Home
