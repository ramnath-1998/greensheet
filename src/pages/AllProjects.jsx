import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import data from '../responses/allprojectsresponse.json'

function AllProjects(props) {


  const [projectList, setProjectList] = useState([])

  const { id } = useParams();
  const [idToPass, setIdToPass] = useState(id)
  console.log(projectList)

  useEffect(() => {
    console.log(id)
    if (idToPass == undefined) {

      const allProjects = data.map(

        (bonddetails) => {


          return (

            <tr key={bonddetails.bondid}>
              <td>{bonddetails.bondid}</td>

              <th scope='row'>{bonddetails.projectId}</th>

              <td>{bonddetails.status}</td>
              <td>{bonddetails.startedOn}</td>
              <td>{bonddetails.willEndOn}</td>
              <td>{bonddetails.questionsAsked}</td>
              <td>{bonddetails.answered}</td>

            </tr>
          )
        }

      )

      setProjectList(allProjects)


    }
    else {

      const projectsWithBond = data.map(

        (bonddetails) => {

          if (bonddetails.bondid == idToPass) {

            return (

              <tr key={bonddetails.bondid}>
                <td>{bonddetails.bondid}</td>

                <th scope='row'>{bonddetails.projectId}</th>
                <td>{bonddetails.status}</td>
                <td>{bonddetails.startedOn}</td>
                <td>{bonddetails.willEndOn}</td>
                <td>{bonddetails.questionsAsked}</td>
                <td>{bonddetails.answered}</td>


              </tr>
            )
          }




        }


      )

      setProjectList(projectsWithBond)

    }

    return () => {

    }
  }, [id])





  return (
    <div>


      <Row className='d-flex justify-content-center'>

        <Col className='bg-white mt-5 d-flex justify-content-center '>

          <MDBTable>
            <MDBTableHead dark>
              <tr>
                <th scope='col' style={{ color: "white" }} >BOND ID</th>
                <th scope='col' style={{ color: "white" }} >Project ID</th>
                <th scope='col' style={{ color: "white" }} >Status</th>
                <th scope='col' style={{ color: "white" }} >Started On</th>
                <th scope='col' style={{ color: "white" }} >Ends On</th>
                <th scope='col' style={{ color: "white" }} >Questions Asked</th>
                <th scope='col' style={{ color: "white" }} >Answered</th>
              </tr>
            </MDBTableHead>

            <MDBTableBody>

              {projectList}
            </MDBTableBody>

          </MDBTable>

        </Col>
      </Row>


    </div>



  )

}

export default AllProjects