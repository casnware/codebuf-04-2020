const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => console.log(`server started successfully on ${PORT}`));


io.on("connection", () => {
    console.log("a user is connected")
});

const url = 'mongodb://127.0.0.1:27017/test'
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', url)
})

db.on('error', err => {
    console.error('connection error:', err)
})

