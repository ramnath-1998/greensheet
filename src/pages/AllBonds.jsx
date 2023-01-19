import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BondCard from '../components/BondCard'
import BondTable from '../components/BondTable'

const AllBonds = () => {
  return (
    <Row className='d-flex justify-content-center'>

      {/* <BondCard></BondCard> */}

      <Col className='bg-white mt-5 d-flex justify-content-center '>
        <BondTable></BondTable>
      </Col>
    </Row>
  )
}

export default AllBonds