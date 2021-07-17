import { Schema, model, Model, Document } from "mongoose";
import bcrypt from "bcrypt";
import { IUserDocument, IUserModel } from "../interfaces/auth";


const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    createdAt: { type: Date, required: true, default: Date.now },
});

/*
    Adding static methods to schema:
    https://millo-l.github.io/Typescript-mongoose-methods-statics/
*/ 
userSchema.statics.login = async function (email: string, password: string) {
    const user = await this.findOne({ email });

    if (!user) {
        throw new Error("User not exists");
    } else {
        // Load hash from your password DB.
        const isValid = await bcrypt.compare(password, user.password);

        if (isValid) {
            return user;
        } else {
            throw new Error("Provided credentials are not valid");
        }
    }

}

userSchema.pre('save', async function (this: any, next) {
    let user = this;

    // hash password if needed
    if (user.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
    }
    next();
});


export const UserModel = model<IUserDocument, IUserModel>(
    "User",
    userSchema
);

export default UserModel