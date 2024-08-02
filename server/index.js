const express = require(`express`);
const router = require("./router");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {return res.send('hello')})
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use('/api', router)

const start = async () => {
    app.listen(5000, () => console.log("Server started"));
}

start();