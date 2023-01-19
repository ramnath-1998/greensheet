import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import data from '../responses/allbondsresponse.json'

const BondTable = () => {




  const displayRow = data.map(

    (bonddetails) => {

      return (

        <tr key={bonddetails.bondid}>
          <th scope='row'>{bonddetails.bondid}</th>
          <td>{bonddetails.entity}</td>
          <td>{bonddetails.amount}</td>
          <td>{bonddetails.currency}</td>
          <td>{bonddetails.issuedon}</td>
          <td>{bonddetails.maturityon}</td>
          <td>{bonddetails.cbicertified}</td>
          <td>{bonddetails.spoprovider}</td>

        </tr>



      )
    }
  )


  return (
    <div>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope='col' style={{color : "white"}} >BOND ID</th>
            <th scope='col' style={{color : "white"}} >Entity</th>
            <th scope='col' style={{color : "white"}} >Amount</th>
            <th scope='col' style={{color : "white"}} >Currency</th>
            <th scope='col' style={{color : "white"}} >Issued On</th>
            <th scope='col' style={{color : "white"}} >Maturity On</th>
            <th scope='col' style={{color : "white"}} >CBI Verified</th>
            <th scope='col' style={{color : "white"}} >SPO Provider</th>
          </tr>
        </MDBTableHead>

        <MDBTableBody>

          {displayRow}

        </MDBTableBody>

      </MDBTable>
    </div>
  )
}

export default BondTable
