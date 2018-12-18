import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchPatients} from './../../../actions/patientActions';
import './../../../css/patients.css';

class SearchBar extends Component {
  render() {

    return (
        <input
          className="form-control"
          placeholder = "Search for Patients"
          onChange={(e) => this.props.searchPatients(e.target.value)}
          value={this.props.searchTerm} />
    );
  }
} 

function mapStateToProps(state) {
  return {
      searchTerm: state.patients.searchTerm,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchPatients}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);