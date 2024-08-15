import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Detail(props) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(props.emp);

    // const detailData=()=>{
    //     console.log(props.emp)
    // }
  return (
    <>
    <div>
        <button className='btn btn-info mx-2' onClick={handleShow} style={{ width: '100px' }}>View</button>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Employee Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className='ms-5'>
                    <h6>Name : { show.name}</h6>
                    <h6>Place : { show.place}</h6>
                    <h6>Email : { show.email}</h6>
                    <h6>Phone : { show.phone}</h6>
                    <h6>Salary : { show.salary}</h6>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
                {/* <Button variant="warning" onClick={handleClose}>
                    Save Changes
                </Button> */}
                </Modal.Footer>
      </Modal>
            </div>
        </div>
    </div>
    
    </>


  )
}

export default Detail