import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Update = () => {
  const { id } = useParams()
  const [name, setName] = useState()
  const [Email, setEmail] = useState()
  const [Age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/' + id)
      .then(result => {
        console.log(result)
        setName(result.data.name)
        setEmail(result.data.Email)
        setAge(result.data.Age)
      })
      .catch(err => console.log(`err:${id}`, err))
  }, [])

  const Update = (e) => {
    e.preventDefault()
    axios.put("http://localhost:3001/Update/" + id, { name, Email, Age })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3 ">
          <form onSubmit={Update}>
            <h2>Update User</h2>
            <div className="mb-2">
              <label htmlFor="">Name</label>
              <input type="text" name="" id="" placeholder='Enter The Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input type="text" name="" id="" placeholder='Enter The Email' className='form-control' value={Email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-2">
              <label htmlFor="">Age</label>
              <input type="text" name="" id="" placeholder='Enter The Age' className='form-control' value={Age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <button className="btn btn-success ">Update</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default Update