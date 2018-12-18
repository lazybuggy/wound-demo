import { GET_PATIENTS, REQUEST_PATIENTS, SEARCH_PATIENTS} from "../../actions/action-types";

const initalState = {
    patients: [],
    searchTerm: ''
};

const patientReducer = (state = initalState, action) => {
    switch(action.type){
        case REQUEST_PATIENTS:
            return{
                ...state
            };
        case GET_PATIENTS:
            return{
                ...state,
                patients: action.json
            };
        case SEARCH_PATIENTS:
           const {searchTerm} = action;
                    
           return {
               ...state,
               searchTerm
            };
        default:
            return state;
    }
};

export default patientReducer;