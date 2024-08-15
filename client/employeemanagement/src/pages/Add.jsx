import React from 'react'
import Header from '../components/Header'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { addEmployee } from '../services/allApi'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Add() {
    const [formData,setFormData]=useState({
        name:'',place:'',email:'',phone:'',salary:''
    })

    const navigate=useNavigate()

    const getData=(e)=>{
        e.preventDefault();  // Prevent the default form submission behavior
        console.log(formData);
        
        const {name,place,email,phone,salary}=formData
        if (!name || !place || !email || !phone || !salary){
            toast.warning('Invalid input')
        }
        else{
            addEmployee({name,place,email,salary,phone}).then((res)=>{
                console.log(res.data);
                toast.success('Employee Added Successfully')
                setFormData({name:'',place:'',email:'',phone:'',salary:''})
                navigate('/')
            }).catch((err)=>{
                console.log(err);
                toast.error('Something went wrong')
            })
        }
    }

    const formCancel=()=>{
        setFormData({name:'',place:'',email:'',phone:'',salary:''})
        navigate('/')

    }
  return (
    <>
    <Header />
    <div className="container">
        <div className=' border shadow mt-5'>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 d-flex align-items-center justify-content-center mt-3 mb-3 ">
                    <h2>Add New Employee</h2>
                </div>
                <div className='col-md-7'>
                    <form action="">
                        <FloatingLabel controlId="floatingName" label="Employee Name" className="mb-3">
                            <Form.Control type="text" placeholder="Enter Employee Name" onChange={(e)=>setFormData({...formData,name:e.target.value})} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPlace" label="Place" className="mb-3">
                            <Form.Control type="text" placeholder="Enter Current Location" onChange={(e)=>setFormData({...formData,place:e.target.value})} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setFormData({...formData,email:e.target.value})} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPhone" label="Phone Number" className="mb-3">
                            <Form.Control type="number" placeholder="Enter 10-digits Phone Number" onChange={(e)=>setFormData({...formData,phone:e.target.value})}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSalary" label="Salary" className="mb-3">
                            <Form.Control type="number" placeholder="Current Salary" onChange={(e)=>setFormData({...formData,salary:e.target.value})}/>
                        </FloatingLabel>
                        <div className='d-flex align-items-center justify-content-center'>
                            <button className="btn btn-success m-3" type='submit' onClick={(e)=>getData(e)}>Submit</button>
                            <button className="btn btn-danger" type='button' onClick={formCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Add