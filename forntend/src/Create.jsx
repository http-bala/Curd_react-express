import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [name,setName] = useState()
  const [Email,setEmail] = useState()
  const [Age,setAge] = useState()
  const navigate = useNavigate()

  const submit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/Create",{name,Email,Age})
    .then( result => {
      console.log(result);
      navigate('/');
    })
    .catch(err => console.log(err))
  }
  return (
    <>
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3 ">
       <form onSubmit={submit}>
            <h2>Add User</h2>
            <div className="mb-2">
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" placeholder='Enter The Name' className='form-control' onChange={(e)=> setName(e.target.value)} />
            </div>
            <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="text" name="" id="" placeholder='Enter The Email' className='form-control'  onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className="mb-2">
                <label htmlFor="">Age</label>
                <input type="text" name="" id="" placeholder='Enter The Age' className='form-control'  onChange={(e)=> setAge(e.target.value)} />
            </div>
            <button className="btn btn-success ">Submit</button>

       </form>
      </div>
    </div>
  </>
  )
}

export default Create