import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {

    return (
        <div className="d-flex">
            <div className="sidebar d-flex flex-column p-5" style={{ height: '90vh', width: '250px', backgroundColor: 'rgb(199, 205, 128' }}>
                <a style={{ textDecoration: 'none', color: 'white', marginTop: '20px', fontWeight: '700' }}>Dashboard</a>
                <Link to={'/studentlist'} style={{ textDecoration: 'none', marginTop: '20px' }}>
                    <a style={{ textDecoration: 'none', color: 'white', marginTop: '20px', fontWeight: '700' }}>Student List</a>
                </Link>

            </div>
            <div class="dashboard p-5">
                <h2 style={{ color: 'red' }}>Welcome Admin</h2>
            </div>
        </div>




    )
}

export default Dashboard