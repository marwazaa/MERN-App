import { editContact } from "../actions/contacts";
import{
    GET_CONTACT_LOAD,
    GET_CONTACT_SUCCESS,
    GET_CONTACT_FAIL,
    GET_CONTACT,
   
} from "../constants/contacts";


const initialState={
    contacts:[],
    loadContacts:false,
    error:null,
    edit:false,
    user:{},
};

export const contactReducer=(state=initialState,{type, payload})=>{
    switch(type){
        case GET_CONTACT_LOAD:
            return{...state,loadContacts:true};
        case GET_CONTACT_SUCCESS:
            return{...state,contacts:payload,loadContacts:false};
        case GET_CONTACT_FAIL:
            return{...state,loadContacts:false, error:payload};
        case GET_CONTACT:
            return{...state,user:payload};
        
        default: 
        return state
    }
}
