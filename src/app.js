import express from "express"
import cors from "cors"
const app=express();
app.use(cors({
    origin: 'http://example.com',
  optionsSuccessStatus: 200
}))
export {app}