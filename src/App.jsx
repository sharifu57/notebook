import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import Notes from './pages/notes'
import Upload from './pages/upload'
import AppRouter from './AppRouter'

function App() {

  return (
    <div>
      <AppRouter />
      {/* <Upload/> */}
      {/* <Login/> */}
      {/* <Notes/> */}
    </div>
  )
}

export default App
