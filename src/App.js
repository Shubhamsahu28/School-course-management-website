//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import {Button} from 'reactstrap';
//import {ToastContainer, toast} from 'react-toastify';
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.css';
//import Course from './Components/course';
import Allcourses from './Components/Allcourses';
import AddCourse from './Components/AddCourse';
import { Col,Component,Container, Row } from 'reactstrap';
import Header from './Components/Header';
import Menus from './Components/Menus';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {

 
  return (
    <div>
      <Router>
      
        
        <Container>
        <Header />
        <Row>
          <Col md={4}>
            <Menus />
          </Col>
          <Col md={8}>
          <Routes>
            <Route path="/" Component={Home} excat />
            <Route  path="/add-course" Component={AddCourse} excat />
             <Route path="/view-courses" Component={Allcourses} exact />
             </Routes>
        
          </Col>
        </Row>
        </Container> 
       
        
       </Router>
       </div>
      
      );
  
}

export default App;
