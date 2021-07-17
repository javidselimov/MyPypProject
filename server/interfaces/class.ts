
import { IStudent } from "./students";

export type Category="PROGRAMMING"|"DESIGN"
export interface IClass {
    name: string;
    type: Category;
    hours: number;
    startDate: string;
    students: IStudent[]; // ids
    maxStudentCapacity: number;
  } 

  export interface IClassPayload{
    
    name: string;
    surname: string;
    dob: string; 
    pin: string; 
    payment: 'CASH' | 'MONTHLY';
    interests: string;
} 



