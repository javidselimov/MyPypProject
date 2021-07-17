import axios from "axios"
import { Dispatch } from "react"
import { ActionCoronaTypes } from "../action_types/corona_actions"



export const getCorona =(country:string)=>{
    return async (dispatch:Dispatch<ActionCoronaTypes>)=>{
           dispatch({
               type:"load_corona"
           })
           const res = await axios.get(`https://covid19.mathdro.id/api/countries/${country}`).then(res=>res.data)
           dispatch({
               type:'success_corona',
               payload:res
           })
        }
}