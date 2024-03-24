const express = require('express'); 
  
const app = express(); 
const PORT = 3000; 
  
app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send("Welcome to root URL of Server. Yey bisa!"); 
}); 

app.get('/hello', (req, res)=>{ 
    res.set('Content-Type', 'text/html'); 
    res.status(200).send("<h1>First Header of the App!</h1>");
}); 

//post command
app.use(express.json()); 
app.post('/post', (req, res)=>{ 
    const {name} = req.body; 
      
    res.send(`Welcome ${name}`); 
}) 

app.listen(PORT, (err) =>{
    if(!err) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 