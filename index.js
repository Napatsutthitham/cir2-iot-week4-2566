const express = require('express');
const logger = require('morgan')
const cors = require('cors')
const app = express()
const  port = process.env.port || 3000;



app.use(logger('dev'));
app.use(cors());
app.use(express.json())

app.get('/', (req,res )=>{
    return res.status(200).json({message:"GET request to the homepage"});
});
app.post('/', (req,res )=>{
    return res.status(201).json({message:"POST request to the homepage"});
});
app.put('/', (req,res )=>{
    return res,status(200).json({message:"PUT request to the homepage"});
});
app.delete('/', (req,res )=>{
    return res,status(200).json({message:"DELETE request to the homepage"});
});

app.listen(port, () => {
    console.log (`Server runing at http://localhost:${port}`)
});