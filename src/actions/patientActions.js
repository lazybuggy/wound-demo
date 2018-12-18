import { GET_PATIENTS, SELECT_PATIENT, REQUEST_PATIENTS, SEARCH_PATIENTS} from "./action-types";

const patientsURL = "http://0.0.0.0:3000/patients";


//get patient json from api
export function fetchPatients(){

    return dispatch => {
        dispatch(requestPatients());
        return fetch(patientsURL)
            .then(res => {
                if(res.ok){
                    return res.json();
                }
            }).then(json => {
                console.log("Succesfully fetched patients data.");
                dispatch(getPatients(json))
            }).catch(err => {
                console.log('An error occured fetching patients.',err)
            })
    }
    
}

export function searchPatients(searchTerm){
    return{
        type: SEARCH_PATIENTS,
        searchTerm
    }
}

export function selectPatient(patient){
    return{
        type:SELECT_PATIENT,
        patient
    }
}

export const requestPatients = () => ({
    type: REQUEST_PATIENTS
})

export const getPatients = json => ({
    type:GET_PATIENTS, 
    json: json.data
})

 