import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './User'
import Create from './Create'
import Update from './Update'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}></Route>
        <Route path='/Create' element={<Create/>}></Route>
        <Route path='/Update/:id' element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
