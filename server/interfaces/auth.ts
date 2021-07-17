import {  Document, Model } from "mongoose";

export interface IAuthPayload {
    email: string,
    password: string,
}

export interface IUser {
    email: string;
    password: string;
    name:string;
    surname:string;
    createdAt: Date;
}

export interface IUserDocument extends IUser, Document {
}

export interface IUserModel extends Model<IUserDocument> {
    login: (email: string, password: string) => Promise<IUserDocument>
}