import { GET_WOUNDS, SELECT_WOUND, REQUEST_WOUNDS, RESOLVE_WOUND } from "./action-types";

const woundUrl = "http://0.0.0.0:3000/wounds/";

//get wounds data of patient from api
export function fetchWounds(patientWoundUrl){

    return dispatch => {
        dispatch(requestWounds());
        return fetch(patientWoundUrl)
            .then(res => res.json(), err => 
                console.log('An error occured getting patients wounds.',err),
            ).then(json => {
                dispatch(getWounds(json));
            })
    }
}

//Update wound data for specific patient
//NOTE: Currently not working
export function patchWound(wound, woundId){

    return dispatch => {
        dispatch(resolveWound(woundId));
       
        const fetchParams = {
            method: 'PATCH',
            headers: {
              'woundId': woundId,
              'payload': wound
            }
        };

        return fetch(woundUrl+woundId,fetchParams)
           .then(res => {
               return res;
            }).catch(err => 
                console.log('An error occured patching wound.',woundUrl,wound,err)
            )
    }
}

export function selectWound(wound){
    return{
        type:SELECT_WOUND,
        wound
    }
}

export const resolveWound = id =>({
    type:RESOLVE_WOUND,
    resolved: true,
    id
})

export const requestWounds = () => ({
    type: REQUEST_WOUNDS
})

export const getWounds= json => ({
    type:GET_WOUNDS, 
    json: json.data
})

 