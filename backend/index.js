// importing express module
const express = require('express');
const userRouter = require('./Router/userRouter');
const cors = require('cors');

// initializing express app
const app = express();
const port = 5000;


const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, { cors : {
    origin : ['http://localhost:3000']
} });

io.on("connection", (socket) => {
  console.log('user connected');
});

// for converting json data into javascript
app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}))

// middleware
app.use('/user', userRouter);

// route or endpoint
app.get( '/', (req, res) => {
    res.send('response from express');
})

app.get('/home', (req, res) => {
    res.send('response from home');
})

// starting the server

httpServer.listen(port, () => {
    console.log('express server started...');
});