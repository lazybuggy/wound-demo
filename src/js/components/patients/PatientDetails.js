import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import Wounds from '../wounds/WoundList';
import { fetchWounds} from '../../../actions/woundActions';
import {bindActionCreators} from 'redux';
import { Grid, Row, Col } from 'react-bootstrap'
import './../../../css/patients.css';
var dateFormat = require('dateformat');

class PatientDetails extends Component {

    fetchPatientWounds(){
        this.props.fetchWounds(this.props.patient.relationships.wounds.links.related);
    }

    convertDOB(dob){
        return dateFormat(new Date(dob), "dddd mmmm dS, yyyy");
    }

    renderPatientAttributes(){
        return(
            <Col xs={6} md={6} className="patientDetailsLeft">
                <Row className="show-grid"> 
                    <Col md={4} mdPull={4}>
                        <Image className="patientImage" src={this.props.patient.attributes.avatarUrl} />
                    </Col>    
                </Row>
                   
                <Row className="show-grid"> 
                    <Col xs={6} md={8}>
                        <h2>Patient Details</h2>
                    </Col> 
                </Row> 

                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <p>Patient Name</p>
                    </Col>
                    <Col xs={6} md={8}>
                        <p>{this.props.patient.attributes.firstName}&nbsp;
                        {this.props.patient.attributes.lastName}</p>
                    </Col>  
                </Row>

                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <p>Date of Birth</p>
                    </Col>
                    <Col xs={6} md={8}>
                        <p>{this.convertDOB(this.props.patient.attributes.dateOfBirth)}</p>
                    </Col>  
                </Row>

                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <p>Address</p>
                    </Col>
                    <Col xs={6} md={8}>
                        <p>{this.props.patient.attributes.address}</p>
                    </Col>  
                </Row>

                <div className="space"></div>

                <Row className="show-grid"> 
                    <Col xs={6} md={8}>
                        <h2>Patient Location</h2>
                    </Col> 
                </Row> 

                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <p>Room Number</p>
                    </Col>
                    <Col xs={6} md={8}>
                        <p>{this.props.patient.attributes.roomNumber}</p>
                    </Col>  
                </Row>

                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <p>Bed Number</p>
                    </Col>
                    <Col xs={6} md={8}>
                        <p>{this.props.patient.attributes.bedNumber}</p>
                    </Col>  
                    </Row>
            </Col>
        );
    }

    renderPatientWounds(){
        return(
            <Col xs={6} md={6}>
                {this.fetchPatientWounds()}
                <Grid>
                    <Row className="show-grid"> 
                        <Col>
                            <h2 className="wounds">Patient Wounds</h2>
                        </Col> 
                    </Row> 
                    <Row className="show-grid">
                        <Col>
                            <Wounds/>     
                        </Col>
                    </Row>
                </Grid>
            </Col>
        );
    }

    render() {

        if(!this.props.patient){
            return(
            <div><p></p></div>// No Patient was selected, return nothing.
            );
        }
       
        return (
            <div className="patientDetails">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12} className="patientDetailsHeader">
                            <h3>Currently Viewing &nbsp;
                                <span style={{color:'#2292a4'}}>
                                    {this.props.patient.attributes.firstName}&nbsp; 
                                    {this.props.patient.attributes.lastName}
                                </span> 
                            </h3>
                        </Col>
                        
                        {this.renderPatientAttributes()}
                        {this.renderPatientWounds()}
                    </Row>
                
                </Grid>   
           </div>      
        );
    }
}

function mapStateToProps(state){
    return{
        patient: state.currentPatient
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({
        fetchWounds: fetchWounds},
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientDetails);