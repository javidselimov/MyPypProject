import { Router, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import * as yup from 'yup';
import { IAuthPayload, IUser } from "../interfaces/auth";
import UserModel from "../models/user";

dotenv.config()

export const AuthRouter = Router();

let authPayloadSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});


const JWT_SECRET = process.env.JWT_SECRET_KEY || ''

AuthRouter.post('/register', async (req, res: Response) => {
    const registerPayload: IAuthPayload = req.body;
    try {
        const validPayload = await authPayloadSchema.validate(registerPayload);

        const newUserObj = new UserModel(validPayload);
        const newUser = await newUserObj.save();

        res.status(201).json({
            _id: newUser._id,
            email: newUser.email,
            createdAt: newUser.createdAt,
        });
    } catch (err) {
        res.status(422).json({ errors: err.errors })
    }
})


AuthRouter.post('/login', async (req, res) => {
    const loginPayload: IAuthPayload = req.body;

    try {
        const validPayload = await authPayloadSchema.validate(loginPayload);

        try {
            const user = await UserModel.login(validPayload.email, validPayload.password);
            const token = jwt.sign({ _id: user._id, email: user.email }, JWT_SECRET, {
                expiresIn: '10000s'
            });
            res.json({
                access_token: token,
                user: {
                    _id: user._id,
                    email: user.email,
                    createdAt: user.createdAt,
                }
            });

        } catch (error) {

            res.status(422).json({ errors: [error.message] })
        }

    } catch (err) {
        console.error(err);
        res.status(422).json({ errors: err.errors })
    }
})

