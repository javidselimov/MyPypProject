import dotenv from "dotenv";
import express from "express";
import mongoose from 'mongoose';
import cors from "cors";

import ROUTES from "./routes";

// env variables
dotenv.config()

// DB connection
const uri = process.env.MONGO_DB_URI || ''
mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('db connected'));

// app setup
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello world'));

ROUTES.forEach(route => {
    app.use(route.path, route.router);
})


app.listen(8009, () => console.log('server started at http://localhost:8009'))