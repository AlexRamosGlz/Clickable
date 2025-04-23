import express, { json } from 'express'
import cors from 'cors'

const app = express();

app.use(cors())

app.listen(8080, () => {
    console.log("Server running");
})


app.get("/", (req, res) => {
    res.json({count: 123}).status(200);
})