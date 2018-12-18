import { GET_WOUNDS, REQUEST_WOUNDS, RESOLVE_WOUND} from "../../actions/action-types";

const initalState = {
    wounds: []
};

const woundReducer = (state = initalState, action) => {
    switch(action.type){
        case REQUEST_WOUNDS:
            return{
                ...state
            };
        case GET_WOUNDS:
            return{
                ...state,
                wounds: action.json
            };
        case RESOLVE_WOUND:
            const wounds = state.wounds.map(wound => {
                if(wound.id === action.id){
                    const attributes = {
                        ...wound.attributes, 
                        resolved: action.resolved
                    };
                    return {
                        wound, 
                        attributes
                    };
                }else{
                    return wound;
                }
            });
            return {
                ...state,
                wounds
            };
        default:
            return state;
    }
};

export default woundReducer;