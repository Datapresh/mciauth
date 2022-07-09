import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sigin from './Pages/Sigin'
import Signup from './Pages/Signup'
import User from './Pages/User'
import { AuthContextProvider } from './Store/Store'


function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sigin />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/user" element={<User/>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App