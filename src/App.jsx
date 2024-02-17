import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage'
import Contacto from './views/Contacto'
import './App.css'

function App() {
  

  return (
   <div>
    <Navigation />
    <Routes>
      <Route
      path='/'
      element={<HomePage />}
      />
      <Route
      path='/contacto'
      element={<Contacto />} />
    </Routes>
   </div>
  )
}

export default App
