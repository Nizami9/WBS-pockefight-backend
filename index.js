const express = require('express');
const app = express();
const axios = require('axios');
const jsonData = require('./file.json');
const port = 5000;
var cors = require('cors')

app.use(cors());

app.get('/pokemon', (req, res)=>{
    res.send(jsonData)
})

app.get('/pokemon/:id', (req, res)=>{
    const {id} = req.params;
    const findPokemon = jsonData.find(pokemon => pokemon.id === parseInt(id))
    return res.send(findPokemon)
})
app.listen(port, ()=>{
    console.log('works')
})


