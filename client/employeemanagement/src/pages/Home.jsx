import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { listEmployee } from '../services/allApi'
import { useState, useEffect } from 'react'
import Detail from './Detail'
import { deleteEmployee } from '../services/allApi'
import { toast } from 'react-toastify'

function Home() {

    const [employees, setEmployees] = useState([])


    useEffect(()=>{
        getAllEmployee()
    },[])

    const getAllEmployee=()=>{
        listEmployee().then((res)=>{
            console.log(res.data);
            setEmployees(res.data)
        })
    }

    const deleteData = (id) => {
        deleteEmployee(id).then((res) => {
            console.log(res);
            toast.success("Employee deleted")
            // Update the state by filtering out the deleted employee
            setEmployees(employees.filter(employee => employee.id !== id))
        }).catch((err) => {
            console.log(err);
            toast.error("Error deleting employee")
        })
    }
  return (
    <>
    <Header />
    <div className="container">
        <div className="row">
            <div className="col-md-12 mt-3">
                <h1>Welcome to our Application</h1>
                <p>“Don't judge each day by the harvest you reap but by the seeds that you plant.” - Robert Louis Stevenson</p>

            </div>
        </div>
        <Link to={'/add'} className='btn btn-warning mt-2'>Add Employee</Link>
    </div>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 p-3 mt-3'>
            <table className="table table-striped table-bordered text-center">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Place</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        employees.length > 0 ? 
                            employees.map(res => (
                                <tr key={res.id}>  {/* Ensure a unique key is provided */}
                                    <td>{res.name}</td>
                                    <td>{res.place}</td>
                                    <td>{res.email}</td>
                                    <td>{res.phone}</td>
                                    <td>{res.salary}</td>
                                    <td className="d-flex justify-content-center align-items-center">
                                        <div className="mx-2">
                                            <Detail emp={res} />
                                        </div>
                                        <Link to={`/edit/${res.id}`} className="btn btn-success mx-2" style={{ width: '100px' }}>Edit</Link> 
                                        <button className="btn btn-danger mx-2" onClick={() => deleteData(res.id)} style={{ width: '100px' }}>Delete</button>
                                    </td>


                                </tr>
                            ))
                        : <tr>
                            <td colSpan="6"><h3>No Data</h3></td>
                        </tr>
                    }   
                </tbody>
            </table>


            </div>

        </div>
    </div>

    </>
  )
}

export default Home