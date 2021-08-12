const socket = io();
const chat = document.querySelector('#chat'); 
const login_btn = document.querySelector('#login-btn');
const login_inp = document.querySelector('#login-inp');
const login = document.querySelector('#login');
const send = document.querySelector('#send');
const text_area = document.querySelector('#text-area');

const list = document.querySelector('#list');


chat.style.display ="none";


login_btn.addEventListener("click",()=>{
    socket.emit('login',{

        name:login_inp.value
       
    })
    login.style.display ="none";
    chat.style.display ="block";
    
})

send.addEventListener("click",()=>{

    socket.emit('send_msg',{

        text:text_area.value

    })
    text_area.value = ""
    
    $('.emojionearea-editor').text("");
    
})

socket.on('recieved_msg',(data)=>{

    const li= document.createElement("li");
    li.innerHTML = (` <strong>${data.name}</strong> :  ${data.msg}`)
    document.body.append(li);
   
})


// $('#login-btn').click(()=>{

//     socket.emit('login',{

//         name:$('#login-inp').val()
//     })
//         $('#login').hide();
//         $('#chat').show();


// })

// $('#send').click(()=>{

//     socket.emit('send_msg',{

//         text:$('#text-area').val()

//     })
//     $('#text-area').val("")
//     $('.emojionearea-editor').text("");
// })

// socket.on('recieved_msg',(data)=>{

//     $('#list').prepend(`<li> <strong>${data.name}</strong> :  ${data.msg}</li>`)

   
// })



