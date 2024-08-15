import React from 'react'
import Header from '../components/Header'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getEmployee } from '../services/allApi';
import { toast } from 'react-toastify';
import { editEmployee } from '../services/allApi';
import { useNavigate } from 'react-router-dom';


function Edit() {
    const[empData,setEmpData]=useState({
        id:'',name:'',place:'',email:'',phone:'',salary:''

    })
    const navigate=useNavigate()

    const {id}=useParams()
    console.log(id);
    
    useEffect(()=>{
        getEmployeeData()
    },[])

    const getEmployeeData=()=>{
        getEmployee(id).then((res)=>{
            console.log(res.data);
            setEmpData({id:res.data.id,name:res.data.name,place:res.data.place,email:res.data.email,phone:res.data.phone,salary:res.data.salary})
        })
    }

    const updateData=(e)=>{
        e.preventDefault()

        const {name,place,email,salary,phone}=empData
        if(!name || !place || !email || !salary || !phone){
            toast.warning('invalid data')
        }
        else{
            editEmployee(empData.id,{name,place,email,salary,phone}).then((res)=>{
                toast.success("Employee Updated")
                navigate('/')
            })
        }
    }
  return (
    <>
    <Header />
    <div className="container">
        <div className=' border shadow mt-5'>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 d-flex align-items-center justify-content-center mt-3 mb-3 ">
                    <h2>Edit Employee Details</h2>
                </div>
                <div className='col-md-7'>
                    <form action="">
                        <FloatingLabel controlId="floatingName" label="Employee Name" className="mb-3">
                            <Form.Control type="text" placeholder="Enter Employee Name" value={empData.name} onChange={(e)=>(setEmpData({...empData,name:e.target.value}))}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPlace" label="Place" className="mb-3">
                            <Form.Control type="text" placeholder="Enter Current Location" value={empData.place} onChange={(e)=>(setEmpData({...empData,place:e.target.value}))}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" value={empData.email} onChange={(e)=>(setEmpData({...empData,place:e.target.value}))}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPhone" label="Phone Number" className="mb-3">
                            <Form.Control type="number" placeholder="Enter 10-digits Phone Number" value={empData.phone} onChange={(e)=>(setEmpData({...empData,phone:e.target.value}))}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSalary" label="Salary" className="mb-3">
                            <Form.Control type="number" placeholder="Current Salary" value={empData.salary} onChange={(e)=>(setEmpData({...empData,salary:e.target.value}))}/>
                        </FloatingLabel>
                        <div className='d-flex align-items-center justify-content-center'>
                            <button className="btn btn-success m-3" type='submit' onClick={(e)=>updateData(e)}>Update</button>
                            <button className="btn btn-danger" type='button' onClick={() => navigate('/')}>Cancel</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>

    </>
  )
}

export default Edit