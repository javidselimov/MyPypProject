import { Router, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { verify } from "jsonwebtoken";
import { Student } from '../models';
import { Class } from '../models';


import { IStudentPayload } from "../interfaces/students";

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET_KEY || ''


export const StudentRouter = Router();

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token) {

        try {
            const userPayload = await verify(token, JWT_SECRET);
            if (userPayload) {
                console.log(userPayload);
                next()
            }
        } catch (error) {
            res.status(401).json({
                errors: error.message
            })
        }


    } else {
        res.status(401).json({
            errors: ['not allowed']
        })
    }
}

// PostRouter.get('/', requireAuth, (req, res) => res.json({
//     post: [{id: 1, text: "DB"}]
// }))

StudentRouter.get('/',requireAuth, async (req: Request, res: Response) => {
    try {
      const student = await Student.find()
      res.status(200).json(student)
    } catch (error) {
      res.status(500).json({ mesage: error.mesage })
    }
  })

  //add student to class
StudentRouter.post('/:classId',requireAuth, async (req: Request, res: Response) => {
    const studentPayload: IStudentPayload = {
      ...req.body
    }
    const student = new Student(studentPayload)
    try {
      const newStudent = await student.save()
      res.status(200).json(newStudent)

      const addedStudent = await Class.updateOne(
        { _id: req.params.classId },
        { $push: { students: newStudent._id } }
      );
      res.send(addedStudent);

    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

  //create student
  StudentRouter.post('/',requireAuth, async (req: Request, res: Response) => {
    const studentPayload: IStudentPayload = {
      ...req.body
    }
    const student = new Student(studentPayload)
    try {
      const newStudent = await student.save()
      res.status(200).json(newStudent)

    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

 

  //get
  StudentRouter.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const student = await Student.findById(id)
      if (!student) {
        res.status(404).json({ message: 'Not found' })
      } else {
        res.json(student)
      }
    } catch (error) {
      res.status(500).json({ mesage: error.mesage })
    }
  })
 
  StudentRouter.patch('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      let student = await Student.findById(id)
      if (!student) {
        res.status(404).json({ message: 'Not found' })
      } else {
        await Student.findByIdAndUpdate(id, req.body, {
          useFindAndModify: true
        })
        student = await Student.findById(id)
  
        res.json(student)
      }
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })  

  StudentRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const student = await Student.findById(id)
      if (!student) {
        res.status(404).json({ message: 'Not found' })
      } else {
        await student.remove()
        res.json({ message: 'Deleted' })
      }
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
  

