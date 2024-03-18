import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addMarksApi, deleteStudentApi, listStudentApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Studentlist() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    }


    const [studentDataAll, setStudentDataAll] = useState([])
    const [newStudentData, setNewStudentData] = useState([])

    // EEE

    const [eeeMarks, seteeeMarks] = useState({
        batch: '',
        registerNumber: '',
        attendence: '',
        signalsAndSystems: '',
        analogElectronics: '',
        communication: '',
        digitalDesign: '',
        controlEngineering: '',
        electroMechanics: ''

    })

    // CSE

    const [cseMarks, setcseMarks] = useState({
        batch: '',
        registerNumber: '',
        attendence: '',
        operatingSystems: '',
        dataStructure: '',
        automata: '',
        wirelessCommunication: '',
        computerNetworking: '',
        artificialIntelligence: ''

    })


    // ECE

    const [eceMarks, seteceMarks] = useState({
        batch: '',
        registerNumber: '',
        attendence: '',
        embeddedSystems: '',
        wirelessCommunication: '',
        informationTheory: '',
        signalsAndSystems: '',
        logicDesign: '',
        electronicCircuit: ''

    })



    const getAllStudents = async () => {
        const result = await listStudentApi()
        console.log('get all students')
        console.log(result)

        if (result.status == 200) {
            setStudentDataAll(result.data.studentData)
            setNewStudentData(result.data.studentData)
        }
    }


    useEffect(() => {
        getAllStudents()
    }, [])

    // seperate modal fns

    const [showEEE, setShowEEE] = useState(false)
    const [showCSE, setShowCSE] = useState(false)
    const [showECE, setShowECE] = useState(false)
    const openModal = (batch, registerNumber) => {
        if (batch == 'cse') {
            setcseMarks({ ...cseMarks, registerNumber: registerNumber, batch: batch })
            setShowCSE(true)
        }
        else if (batch == 'eee') {
            seteeeMarks({ ...eeeMarks, registerNumber: registerNumber, batch: batch })

            setShowEEE(true)
        }
        else {
            seteceMarks({ ...eceMarks, registerNumber: registerNumber, batch: batch })
            setShowECE(true)
        }
    }
    const handleCloseCSE = () => setShowCSE(false)
    const handleCloseEEE = () => setShowEEE(false)
    const handleCloseECE = () => setShowECE(false)



    // add marks for cse function


    const addMarksCSE = async (e) => {

        e.preventDefault()

        const { attendence, operatingSystems, dataStructure, automata, wirelessCommunication, computerNetworking, artificialIntelligence } = cseMarks


        if (!attendence || !operatingSystems || !dataStructure || !automata || !wirelessCommunication || !computerNetworking || !artificialIntelligence) {
            alert('Please Fill The Form Completely')
        }
        else {
            const result = await addMarksApi(cseMarks)

            console.log(result)

            if (result.status == 200) {

                toast.success(" Marks inserted Successfully", {
                    position: "top-center"
                });
                setTimeout(() => {
                    handleCloseCSE()
                }, 2000);


            }

            else {
                const errorMsg = result.response.data.message;
                toast.error(errorMsg, {
                    position: "top-center"
                });

            }

        }

    }



    // add marks for ece function

    const addMarksECE = async (e) => {

        e.preventDefault()

        const { attendence, embeddedSystems, wirelessCommunication, informationTheory, signalsAndSystems, logicDesign, electronicCircuit } = eceMarks


        if (!attendence || !embeddedSystems || !wirelessCommunication || !informationTheory || !signalsAndSystems || !logicDesign || !electronicCircuit) {
            alert('Please Fill The Form Completely')

        }
        else {
            const result = await addMarksApi(eceMarks)

            console.log(result)

            if (result.status == 200) {

                toast.success(" Marks inserted Successfully", {
                    position: "top-center"
                });
                setTimeout(() => {
                    handleCloseECE()
                }, 2000);


            }

            else {
                const errorMsg = result.response.data.message;
                toast.error(errorMsg, {
                    position: "top-center"
                });

            }

        }

    }


    // add marks for eee function

    const addMarksEEE = async (e) => {

        e.preventDefault()

        const { attendence, signalsAndSystems, analogElectronics, communication, digitalDesign, controlEngineering, electroMechanics } = eeeMarks

        console.log(attendence, signalsAndSystems, analogElectronics, communication, digitalDesign, controlEngineering, electroMechanics)
        if (!attendence || !signalsAndSystems || !analogElectronics || !communication || !digitalDesign || !controlEngineering || !electroMechanics) {
            console.log(eeeMarks)
            alert('Please Fill The Form Completely')
        }
        else {
            const result = await addMarksApi(eeeMarks)

            console.log(result)

            if (result.status == 200) {

                toast.success(" Marks inserted Successfully", {
                    position: "top-center"
                });
                setTimeout(() => {
                    handleCloseEEE()
                }, 2000);


            }

            else {
                const errorMsg = result.response.data.message;
                toast.error(errorMsg, {
                    position: "top-center"
                });

            }

        }

    }

    // sortin
    const sortby = (data) => {
       if(data == 'id'){
        const sortedData = [...studentDataAll].sort((a, b) => a.registernumber - b.registernumber);
        setStudentDataAll(sortedData);
       }
       else if(data == 'name'){
        const sortedData = [...studentDataAll].sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
          setStudentDataAll(sortedData);
       }
    }

    const searchByName = (searchValue)=>{
        if(searchValue ===""){
            getAllStudents()
            //setStudentDataAll(studentDataAll)
        }
        else{
           
            const filteredStudents = newStudentData.filter((student) =>
            student.name.toLowerCase().includes(searchValue.toLowerCase())
          );
          setStudentDataAll(filteredStudents)
        }
       
    }

    const deleteStudent = async(regno)=>{
        const result = await deleteStudentApi(regno);
        if(result.status==200){
            toast.success('Student Deleted successfully', {
                position: "top-center"
            });
            getAllStudents()
        }
        else{
            toast.error('Some error in deleting', {
                position: "top-center"
            });
        }
    }
 



    return (
        <div className="d-flex">


            <div className="sidebar d-flex flex-column p-5"
                style={{ height: '90vh', width: '250px', backgroundColor: 'rgb(199, 205, 128)' }}>
                <Link to={'/dashboard'} style={{ textDecoration: 'none', color: 'white', marginTop: '20px', fontWeight: '700' }}>
                    <a >Dashboard</a>
                </Link>

                <a style={{ textDecoration: 'none', color: 'white', marginTop: '20px', fontWeight: '700' }}>Student List</a>
            </div>


            <div className="p-5 w-100">

                <div className="d-flex justify-content-between">
                    <h2 style={{ color: 'rgb(93, 226, 222)' }}>Student List</h2>
                    <Link to={'/studentlist/add'}><a style={{ textDecoration: 'none' }} className="btn btn-outline-secondary pt-2">
                        <i class="fa-solid fa-user-plus me-2"></i>ADD USER
                    </a></Link>

                </div>

                <div class="d-flex justify-content-center align-items-center flex-column mt-5">
                    <div class="d-flex justify-content-between w-100">
                        <div class="d-flex w-75">
                            <input type='text' class="form-control w-50" placeholder="search Username"
                            onChange={(e)=>searchByName(e.target.value)}
                            ></input>
                            <div className="form-floating w-25 ms-3">
                                <select class="form-select"
                                    name="status" onChange={(e)=>sortby(e.target.value)}
                                    id="floatingSelect" aria-label="Floating label select example">
                                    <option value="novalue">Please select</option> 
                                    <option value="id">Register Number</option>
                                    <option value="name">Name</option>

                                </select >
                                <label for="floatingSelect" >Sort</label>
                            </div>

                        </div>
                        {/* <button class="btn btn-success">EXPORT</button> */}
                    </div>
                    <table class="table table-bordered border-primary shadow mt-5 rounded">
                        <thead>
                            <tr class="p-3 table-active">
                                <th class="py-4 text-center">RegisterNumber</th>
                                <th class="py-4 text-center">StudentName</th>
                                <th class="py-4 text-center">Email</th>
                                <th class="py-4 text-center">MobileNumber</th>
                                <th class="py-4 text-center">Batch</th>
                                <th class="py-4 text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                studentDataAll?.length > 0 ?
                                    studentDataAll.map((item) => (
                                        <tr >
                                            <td class="text-center">{item.registernumber}</td>
                                            <td class="text-center">{item.name}</td>
                                            <td class="text-center">{item.email}</td>
                                            <td class="text-center">{item.mobilenumber}</td>
                                            <td class="text-center">{item.batch}</td>
                                            <td class="text-center">
                                                <Link to={`/studentlist/edit/${item.id}`}><a class="btn btn-outline-primary">
                                                    <i class="fa-solid fa-pen-to-square"></i></a></Link>
                                                <a class="btn btn-outline-danger ms-3" onClick={()=>deleteStudent(item.registernumber)}><i class="fa-solid fa-trash"></i></a>
                                                <a onClick={() => openModal(item.batch, item.registernumber)} class="btn btn-outline-danger ms-3"><i class="fa-solid fa-list"></i></a>

                                            </td>
                                        </tr>
                                    ))
                                    :
                                    <p>No student details found</p>
                            }
                        </tbody>
                    </table>
                </div>

            </div>

            {/* EEE */}

            <Modal size='lg' show={showEEE} onHide={handleCloseEEE}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'rgb(93, 226, 222' }}>EEE SUBJECTS</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form className="border rounded p-5 shadow mt-5 w-100">

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Attendence</Form.Label>
                            <Form.Control type="text" placeholder="Enter the attendence %" onChange={(e) => seteeeMarks({ ...eeeMarks, attendence: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>SignalsandSystems</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => seteeeMarks({ ...eeeMarks, signalsAndSystems: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Analog Electronics</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => seteeeMarks({ ...eeeMarks, analogElectronics: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Communication</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => seteeeMarks({ ...eeeMarks, communication: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Digital Design</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => seteeeMarks({ ...eeeMarks, digitalDesign: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Control Engineering</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => seteeeMarks({ ...eeeMarks, controlEngineering: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Electromechanics</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => seteeeMarks({ ...eeeMarks, electroMechanics: e.target.value })} />
                        </Form.Group>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEEE}>
                        Close
                    </Button>
                    <Button variant="success" onClick={addMarksEEE}>
                        Add marks
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* CSE */}

            <Modal size='lg' show={showCSE} onHide={handleCloseCSE}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'rgb(93, 226, 222' }}>CSE SUBJECTS</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form className="border rounded p-5 shadow mt-5 w-100" style={{ background: "linear-gradient(red, blue);" }}>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Attendence</Form.Label>
                            <Form.Control type="text" placeholder="Enter the attendence %" onChange={(e) => setcseMarks({ ...cseMarks, attendence: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>operatingsystems</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => setcseMarks({ ...cseMarks, operatingSystems: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>datastructure</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => setcseMarks({ ...cseMarks, dataStructure: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>automata</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => setcseMarks({ ...cseMarks, automata: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>wirelesscommunication</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => setcseMarks({ ...cseMarks, wirelessCommunication: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>computernetworking</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => setcseMarks({ ...cseMarks, computerNetworking: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>artificialintelligence</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => setcseMarks({ ...cseMarks, artificialIntelligence: e.target.value })} />
                        </Form.Group>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCSE}>
                        Close
                    </Button>
                    <Button variant="success" onClick={addMarksCSE}>
                        Add Marks
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* ECE */}

            <Modal size='lg' show={showECE} onHide={handleCloseECE}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'rgb(93, 226, 222' }}>ECE SUBJECTS</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form className="border rounded p-5 shadow mt-5 w-100" style={{ background: "linear-gradient(red, blue);" }}>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Attendence</Form.Label>
                            <Form.Control type="text" placeholder="Enter the attendence %" onChange={(e) => seteceMarks({ ...eceMarks, attendence: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>embeddedsystems</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => seteceMarks({ ...eceMarks, embeddedSystems: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>wirelesscommunication</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => seteceMarks({ ...eceMarks, wirelessCommunication: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>informationtheory</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => seteceMarks({ ...eceMarks, informationTheory: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>signalsandsystems	</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => seteceMarks({ ...eceMarks, signalsAndSystems: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>logicdesign</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => seteceMarks({ ...eceMarks, logicDesign: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>electroniccircuit</Form.Label>
                            <Form.Control type="text" placeholder="Enter the marks" onChange={(e) => seteceMarks({ ...eceMarks, electronicCircuit: e.target.value })} />
                        </Form.Group>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseECE}>
                        Close
                    </Button>
                    <Button variant="success" onClick={addMarksECE}>
                        Add Marks
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </div>
    )
}

export default Studentlist