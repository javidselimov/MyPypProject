

// export interface IPlaylist{
//     id: number;
//     name: string;
//     creation_date:string;
//     author:string
//     songs:ISong[]
// }

export interface IStudentPayload{
    
    name: string;
    surname: string;
    dob: string; 
    pin: string; 
    payment: 'CASH' | 'MONTHLY';
    interests: string;
}



export interface IStudent {
    name: string;
    surname: string;
    dob: string; // Date of birth
    pin: string; // Personal Identification number
    payment: 'CASH' | 'MONTHLY';
    interests: string;
  }

export interface IClass {
    name: string;
    type: 'PROGRAMMING' | "DESIGN";
    hours: number;
    startDate: string;
    students: IStudent[]; // ids
    maxStudentCapacity: number;
  }  