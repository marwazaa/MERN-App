import {TOGLE_FALSE, TOGLE_TRUE} from "../constants/edit"

const initialState={
    edit:false
}
export const editReducer=(state=initialState, {type})=>{
    switch (type) {
        case TOGLE_TRUE:return{...state,edit:true}

        case TOGLE_FALSE:return{...state,edit:false}
            
        default: return state
            
    }
}
