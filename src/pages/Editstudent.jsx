import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';




function Editstudent() {
  const [updateDetails, setUpdateDetails] = useState({
    registerNumber: '',
    studentName: '',
    email: '',
    mobileNumber: '',
    batch: ''
  })

  const { id } = useParams();
  console.log("===id", id)

  const updateStudent = async (e) => {

    e.preventDefault()

    const { registerNumber, studentName, email, mobileNumber, batch, } = updateDetails
    if (!registerNumber || !studentName || !email || !mobileNumber || !batch) {

      alert('please fill the form completely')
    }


    else {


      // if(result.status==200){

      //     toast.success(" Student Updated Successfully", {
      //         position: "top-center"
      //       });

      //     console.log(updateDetails)

      // }
      // else{
      //     toast.error("Student updation Failed !", {
      //         position: "top-center"
      //       });

      // }
    }
  }



  return (
    <div className="d-flex">
      <div className="sidebar d-flex flex-column p-5"
        style={{ height: '90vh', width: '250px', backgroundColor: 'rgb(199, 205, 128)' }}>
        <Link to={'/dashboard'} style={{ textDecoration: 'none', color: 'white', marginTop: '20px', fontWeight: '700' }}>
          <a >Dashboard</a>
        </Link>
        <Link to={'/studentlist'} style={{ textDecoration: 'none', marginTop: '20px' }}>
          <a style={{ textDecoration: 'none', color: 'white', marginTop: '20px', fontWeight: '700' }}>Student List</a>
        </Link>
      </div>
      <div className="d-flex w-100 justify-content-center align-items-center flex-column p-3">
        <h2 style={{ color: 'rgb(93, 226, 222)' }}>Update Student Details</h2>
        <Form className="border rounded p-5 shadow mt-5 w-50">

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="StudentName" onChange={(e) => setUpdateDetails({ ...updateDetails, studentName: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email" onChange={(e) => setUpdateDetails({ ...updateDetails, email: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="MobileNumber" onChange={(e) => setUpdateDetails({ ...updateDetails, mobileNumber: e.target.value })} />
          </Form.Group>


          <div className="form-floating mb-3">
            <select className="form-select"
              name="status"

              id="floatingSelect" aria-label="Floating label select example">
              <option>Please Select The Batch</option>
              <option value="1">CSE</option>
              <option value="0">ECE</option>
              <option value="0">EEE</option>
            </select>
            <label for="floatingSelect">Batch</label>
          </div>

          <div className="mb-3">
            <button className="btn btn-warning">Cancel</button>
            <button className="btn btn-success ms-4" onClick={updateStudent}>Update</button>
          </div>

        </Form>
      </div>



    </div>
  )
}

export default Editstudent