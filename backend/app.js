import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter)

mongoose.connect('mongodb+srv://adminMuskan:H8DqGeYCh8tY1RA8@cluster0.f25qfrh.mongodb.net/Blog?retryWrites=true&w=majority'
)
    .then(() => app.listen(5000))
    .then(() => console.log("Connected to database and listening to Localhost:5000....")
    )
    .catch((err) => console.log(err));
