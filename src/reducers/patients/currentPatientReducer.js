import { SELECT_PATIENT } from "../../actions/action-types";


const currentPatientReducer = (state = null, action) => {
    switch(action.type){
        case SELECT_PATIENT:
            return action.patient
            
        default:
            return state;
    }
};

export default currentPatientReducer;