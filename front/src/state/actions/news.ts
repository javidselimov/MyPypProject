import axios from "axios"
import { Dispatch } from "react"

import { ActionNewsTypes } from "../action_types/news_types"


const key=`18af480548ce433b9fbfdbabb10790c0`

export const getNews=(word:string)=>{
    return  async (dispatch:Dispatch<ActionNewsTypes>)=>{
          dispatch({
              type:'load'
          })

          const res= await axios.get(`https://newsapi.org/v2/everything?q=${word}&from=2021-07-08&sortBy=popularity&apiKey=${key}`).then(res=>res.data)
           
           dispatch({
               type:'success',
               payload: res
           })
    
        }
}