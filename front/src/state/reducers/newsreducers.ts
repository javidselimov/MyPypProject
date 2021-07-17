
import { ActionNewsTypes, NewsTypes } from "../action_types/news_types"

export interface Iinit{
    loading:boolean
    payload?: NewsTypes
}

const initialState:Iinit= {
    loading:false
}

export const Newsreducer =(state=initialState,action:ActionNewsTypes):Iinit=>{
   switch(action.type){
        case 'load':
            return{
                ...state,
                loading:true
            }
     case 'success':
         return{
             ...state,
             loading:false,
             payload:action.payload
         }
     default:
         return state    
    }
}