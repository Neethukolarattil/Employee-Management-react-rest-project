import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/add" element={<Add/>}/>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
