import React, { Component } from 'react';
import './css/App.css';
import Patients from './js/components/patients/PatientList';
import PatientDetails from './js/components/patients/PatientDetails';
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
       
       
        <Grid fluid={true}>
          <Row className="show-grid">
            
            <Col className="sidebar" xs={5} md={2}>
              <Patients />
            </Col>
              
              <Col className="details" xs={12} md={9}>
                <Row className="show-grid">
                  <Col className="siteHeader" xs={12} md={12}>
                    <h1>WOUNDS DEMO APP</h1>
                  </Col>
                  
                  <Col xs={12} md={12}>
                    <PatientDetails />
                  </Col>
                </Row>
              </Col>
          
          </Row>
        </Grid>
        
      </div>
    );
  }
}

export default App;
