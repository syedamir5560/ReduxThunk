import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { postUsers } from './Store/AsynkThunk/fetchusers';

function Createdata() {

    let dispatch=useDispatch()

    let [data , setdata]=useState({
        name : "",
        email:"",
        password:"",
        image:"",
        description:""
    })

    let onHandleChange=(e)=>{
            setdata({
                ...data,[e.target.name]:[e.target.value]
            })
    }

    let onHandleSubmit=(e)=>{
            e.preventDefault()
            console.log(data)
            dispatch(postUsers(data))

    }

    return (
        <>
            <h2 className='text-center mt-2'>Upload Data</h2>

           <div className='border border-3 border-primary p-4'>
           <form onSubmit={onHandleSubmit} >
                <Form.Control
                    name='name'
                    value={data.name}
                    onChange={onHandleChange}
                    
                    className='my-4 w-50 m-auto' type="text" placeholder="NAME" />
                <Form.Control
                    name='email'
                    value={data.email}
                    onChange={onHandleChange}
                   
                    className='my-4 w-50 m-auto' type="text" placeholder="EMAIL" />
                <Form.Control
                    name='password'
                    value={data.password}
                    onChange={onHandleChange}
                    className='my-4 w-50 m-auto' type="text" placeholder="PASSWORD" />
                <Form.Control
                    name='image'
                    value={data.image}
                    onChange={onHandleChange}
                    className='my-4 w-50 m-auto' type="text" placeholder="IMAGE" />

                <Form.Control
                    name='description'
                    value={data.description}
                    onChange={onHandleChange}
                    className='my-4 w-75 m-auto'
                    as="textarea"
                    placeholder="Content for your blog"
                    style={{ height: '100px' }}

                />

                <button className='d-block w-75 m-auto btn btn-success' type='submit'>CREATE BLOG</button>

            </form>
           </div>
        </>

    )
}

export default Createdata