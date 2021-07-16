import { TOGLE_FALSE,TOGLE_TRUE } from "../constants/edit";
export const toggleTrue=()=>{
    return{
        type:TOGLE_TRUE
    }
  
}
export const toggleFalse=()=>{
    return{
        type: TOGLE_FALSE
    }
}
