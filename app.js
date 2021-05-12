const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);


app.set('view engine','ejs');
app.use('/chat',express.static(path.join(__dirname,'/public')));
app.set('views',path.join(__dirname,'/views'));


const users={}

io.on('connection',(socket)=>{


    socket.on('login',(data)=>{

        users[socket.id] = data.name;


    })

    socket.on('send_msg',(data)=>{


      

        io.emit('recieved_msg',{

            msg:data.text,
            name:users[socket.id]
        })
    })





})


app.get('/',(req,res)=>{

    res.render('home');
})



server.listen( process.env.PORT || 3001,()=>{

    console.log("Server Started at port 3001");
})