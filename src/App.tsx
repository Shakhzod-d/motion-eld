
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
 function App() {
  return (
    <>
  <h1>Hello</h1>
  <Routes>
    <Route path='/login' element={<Login/>}/>
  </Routes>
    </>
  )
}

export default App
