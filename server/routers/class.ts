import { Router, Request, Response, NextFunction } from "express";
import {requireAuth} from './students';
import { Class } from '../models';

import { IClassPayload } from "../interfaces/class";

export const ClassRouter = Router();


ClassRouter.get('/',requireAuth, async (req: Request, res: Response) => {
    try {
      const classe = await Class.find()
      res.status(200).json(classe)
    } catch (error) {
      res.status(500).json({ mesage: error.mesage })
    }
  })

ClassRouter.post('/',requireAuth, async (req: Request, res: Response) => {
    const classPayload: IClassPayload = {
      ...req.body
    }
    const classe = new Class(classPayload)
    try {
      const newClass = await classe.save()
      res.status(200).json(newClass)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

  //get
  ClassRouter.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const classe = await Class.findById(id)
      if (!classe) {
        res.status(404).json({ message: 'Not found' })
      } else {
        res.json(classe)
      }
    } catch (error) {
      res.status(500).json({ mesage: error.mesage })
    }
  })
 
  ClassRouter.patch('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      let classe = await Class.findById(id)
      if (!classe) {
        res.status(404).json({ message: 'Not found' })
      } else {
        await Class.findByIdAndUpdate(id, req.body, {
          useFindAndModify: true
        })
        classe = await Class.findById(id)
  
        res.json(classe)
      }
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }) 

  ClassRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const classes = await Class.findById(id)
      if (!classes) {
        res.status(404).json({ message: 'Not found' })
      } else {
        await classes.remove()
        res.json({ message: 'Deleted' })
      }
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })  