import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { createStudentApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Addstudent() {

    const [studentDetails, setStudentDetails] = useState({
        registerNumber: '',
        studentName: '',
        email: '',
        mobileNumber: '',
        batch: ''
    })
      const navigate = useNavigate()

    const addDetails = async (e) => {

        e.preventDefault()

        const { registerNumber, studentName, email, mobileNumber, batch } = studentDetails
        

        if (!registerNumber || !studentName || !email || !mobileNumber || !batch) {
            alert('Please Fill The Form Completely')
        }
        else {
            const result = await createStudentApi(studentDetails)

            console.log(result)

            if(result.status==200){
              
                toast.success(" Student Created Successfully", {
                    position: "top-center"
                  });
                  setTimeout(() => {
                    navigate('/studentlist')
                }, 2000);
                console.log(studentDetails)
               
            }
            else if(result.status==409){

                toast.error("Student Already Exist With Given Register Number!", {
                    position: "top-center"
                  });
            
            }
            else{
                toast.error("Student creation Failed!", {
                    position: "top-center"
                  });
            
            }

        }

        console.log(studentDetails)
    }

    return (
        <div className="d-flex">
            <div className="sidebar d-flex flex-column p-5"
                style={{ height: '90vh', width: '250px', backgroundColor: 'rgb(199, 205, 128)' }}>
                <Link to={'/dashboard'} style={{ textDecoration: 'none', color: 'white', marginTop: '20px', fontWeight: '700' }}>
                    <a >Dashboard</a>
                </Link>
                <Link to = {'/studentlist'} style={{textDecoration:'none', marginTop:'20px'}}>
                <a style={{ textDecoration: 'none', color: 'white', marginTop: '20px', fontWeight: '700'}}>Student List</a>
                </Link>
            </div>

            <div className="d-flex w-100 justify-content-center align-items-center flex-column p-3">
                <h2 style={{ color: 'rgb(93, 226, 222)' }}>Add New Student Details</h2>

                <Form className="border rounded p-5 shadow mt-5 w-50">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Register Number" onChange={(e) => setStudentDetails({ ...studentDetails, registerNumber: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Student Name" onChange={(e) => setStudentDetails({ ...studentDetails, studentName: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Email" onChange={(e) => setStudentDetails({ ...studentDetails, email: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Mobile Number" onChange={(e) => setStudentDetails({ ...studentDetails, mobileNumber: e.target.value })} />
                    </Form.Group>



                    <div className="form-floating mb-3">
                        <select onChange={(e) => setStudentDetails({ ...studentDetails, batch: e.target.value })} class="form-select"
                            name="status"

                            id="floatingSelect" aria-label="Floating label select example">
                            <option>Please Select The Batch</option>
                            <option value="cse">CSE</option>
                            <option value="eee">EEE</option>
                            <option value="ece">ECE</option>
                        </select >
                        <label for="floatingSelect" >Batch</label>
                    </div>

                    <div class="mb-3">
                        <button className="btn btn-warning">Clear</button>
                        <button className="btn btn-success ms-4" onClick={addDetails}>Add</button>
                    </div>

                </Form>
            </div>
            <ToastContainer />

        </div>
    )
}

export default Addstudent