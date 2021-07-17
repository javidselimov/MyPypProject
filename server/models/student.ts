import mongoose from 'mongoose'
import { string } from 'yup/lib/locale';
const { Schema } = mongoose


export type cashType= 'CASH' | 'MONTHLY'

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  dob: {
    type: String,
  
  },
  pin: {
    type: String,
    required: true
  },
  payment:{
      type:String,
  },
  interests:{
     type: String
  } 

})

export default mongoose.model('Student', studentSchema)



  
  
 