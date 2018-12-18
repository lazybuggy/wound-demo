import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPatients, selectPatient } from '../../../actions/patientActions';
import {bindActionCreators} from 'redux';
import './../../../css/patients.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import SearchBar from './SearchBar';
const _ = require('lodash')

class PatientList extends Component {
    constructor(props) {
        super(props);
        this.props.fetchPatients();
    }

    renderPatientList(){
        return this.props.filteredPatients.map((patient) => {
            return(
                <ListGroupItem className="ListItem" key={patient.id} onClick={() => this.props.selectPatient(patient)}>
                    {patient.attributes.firstName}&nbsp;
                    {patient.attributes.lastName}
                </ListGroupItem>
            );
        });
    }  
    
    render() {
        if (!this.props.filteredPatients) {
            return (
                <div></div> //No patients to display. Something went wrong getting patients
            );
        }

        return (
            <div>
                <SearchBar></SearchBar>
                <ListGroup className="patientList">
                    {this.renderPatientList()}
                </ListGroup>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { searchTerm, patients } = state.patients;
    
    //Filter patients array based on search term, only looking on first name
    return{
        filteredPatients: patients.filter((name) => _.toLower(name.attributes.firstName).includes(_.toLower(searchTerm)))
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchPatients: fetchPatients,
        selectPatient: selectPatient},
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);