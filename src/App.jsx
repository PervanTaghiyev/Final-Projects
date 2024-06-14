import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import NotFoundPage from './Pages/NotFoundPage'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
     <Route path="/"element={<HomePage/>}/>
     <Route path="*" element={<NotFoundPage/>}/>
     </Routes> 
     <Footer/>

    </>
  )
}

export default App
