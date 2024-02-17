import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavMenu';
import Home from './views/Home';
import Contacto from './views/Contacto';

function App() {

  return (
    <>
      {/* BrowserRouter mantendrá actualizadas las diferentes rutas mientras esten en su "scope" */}
      <BrowserRouter> 
        <NavMenu />
        {/* Dentro del componente Routes se crean las diferentes rutas */}
        <Routes>
          {/* rutas: primero la ruta y segundo el componente (o vista) */}
          <Route path="/" element={<Home />}/>
          <Route path="/contacto" element={<Contacto />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
