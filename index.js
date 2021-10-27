const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send('WOW!!! I am excited to learn Node & Express with  nodemon. Automatic Restart');
})


//search query
// app.get('/users',(req,res)=>{
//     const search = req.query.khujo;
//     if(search)
//     {
//         const searchResult = users.filter(user=> user.name.toLowerCase().includes(search.toLowerCase()));
//         res.send(searchResult);
//     }
//     else{
//         res.send(users)
//     }
// })

//search query
app.get('/users',(req,res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
       res.send(users) 
    }
    
})

//app.METHOD
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.get('/fruits', (req,res)=>{
    res.send(['mango','oranges','banana','apple'])
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('Yammi Yammi Mango Misti kom Mango')
})

const users = [
    {id:0, name: "Shabana", email: "shabana@gmail.com", phone:"01788223344"},
    {id:1, name: "Shabnur", email: "shanur@gmail.com", phone:"01788223344"},
    {id:2, name: "Shabanti", email: "shab@gmail.com", phone:"01788223344"},
    {id:3, name: "Shusmita", email: "shushmita@gmail.com", phone:"01788223344"},
    {id:4, name: "Shucona", email: "shucona@gmail.com", phone:"01788223344"},
    {id:5, name: "Soniya", email: "soniya@gmail.com", phone:"01788223344"},
]

app.listen(port, ()=>{
    console.log('Listening to the port', port);
})