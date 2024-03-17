import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { loginAdminApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const loginAdmin = async (e) => {

        e.preventDefault()

        const { email, password } = loginDetails
        if (!email || !password) {

            alert('please fill the form completely')
        }
        else {
            const result = await loginAdminApi(loginDetails)
            console.log(result)

            if (result.status == 200) {

                toast.success(" Admin Logged In Successfully", {
                    position: "top-center"
                });
                setTimeout(() => {

                    navigate('/Dashboard')
                }, 2000);

                console.log(loginDetails)


            }
            else {
                toast.error("Admin Loggin Failed !", {
                    position: "top-center"
                });

            }
        }

    }
    return (
        <>
            <div className="row w-100 mt-5 d-flex justify-content-center align-items-center" style={{ width: '100%', height: '78vh' }}>
                <div className="col-md-1 col-lg-1"></div>
                <div className="col-md-5 col-lg-5">
                    <img src="https://www.go.ooo/img/bg-img/Login.jpg" alt="" height={'400px'} width={'500px'} />
                </div>
                <div class="col-md-5 col-lg-5">
                    <h2 className="text-center" style={{ color: 'rgb(93, 226, 222)' }}>Login</h2>

                    <Form className="mt-3 border shadow p-5 rouded">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="password" placeholder="password" onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} />
                        </Form.Group>

                        <button className='btn btn-success' onClick={loginAdmin}>Login</button>

                    </Form>

                </div>
                <div class="col-md-1 col-lg-1"></div>

                <ToastContainer />

            </div>
        </>
    )
}

export default Login