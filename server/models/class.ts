import mongoose from 'mongoose'
import { IStudent } from '../interfaces/students'
const { Schema } = mongoose

const classSchema = new Schema({
  name: {
    type: String
  },
  type: {
    type: String,
    required: true,
    
  },
  hours: {
    type:Number,
    required: true,
  },
  startDate:{
    type:String,
  } ,
  students: {
     type: []
   },
  maxStudentCapacity:{
    type:Number,
  } 
})

export default mongoose.model('Class', classSchema)

