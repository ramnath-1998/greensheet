import React from 'react'
import { Row } from 'react-bootstrap'
import BondCard from '../components/BondCard'
import BondTable from '../components/BondTable'

const AllBonds = () => {
  return (
    <Row>
      <div className='bondcardspage'>
        {/* <BondCard></BondCard> */}

        <BondTable></BondTable>
      </div>
    </Row>
  )
}

export default AllBonds