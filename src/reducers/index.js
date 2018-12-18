import { combineReducers } from 'redux';
import PatientReducer from './patients/patientsReducer';
import CurrentPatientReducer from './patients/currentPatientReducer';
import WoundReducer from './wounds/woundsReducer';

const rootReducer = combineReducers({
    patients: PatientReducer,
    currentPatient: CurrentPatientReducer,
    wounds: WoundReducer
});

export default rootReducer;