import './App.scss';
import NavbarMain from './components/Navbarmain';
import 'bulma/css/bulma.min.css';
import Home from './pages/Home'
import Allbonds from './pages/AllBonds';
import Allprojects from './pages/AllProjects'
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';


function App() {
  return (




    <div className='main'>
      <Row>
        <div className="container-fluid w-100 indigo">
          <NavbarMain></NavbarMain>
        </div>
      </Row>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bonds" element={<Allbonds />} />
        <Route path="projects" element={<Allprojects />} />
        <Route path="projects/:id" element={<Allprojects />} />
      </Routes>
    </div>



  );
}

export default App;
