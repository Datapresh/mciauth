import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sigin from './Pages/Sigin'
import Signup from './Pages/Signup'
import User from './Pages/User'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sigin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/user" element={<User/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App