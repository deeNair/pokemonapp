require('dotenv').config();
const express= require('express');
const PORT=3000;
const connectTodb=require('./config/db');
//const pokemon = require('./models/pokemon');
const Pokemons = require('./models/Pokemons');

const app = express();

app.set('view engine','jsx');

app.engine('jsx',require('jsx-view-engine').createEngine())


  
  app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to the Pokemon App!</h1>');
})

app.get('/pokemon',(req,res)=>{
    //res.send(pokemon);
    /*res.render('./Index',{pokemonArr:pokemon});*/

    Pokemons.find({},(error,allPokemon)=>{
        res.render('./Index',{pokemonArr:allPokemon})
    })

})

app.post('/pokemon',(req,res)=>{
  Pokemons.create(req.body).then(pk=>{
    res.send(pk);
    //res.redirect('/pokemon');
  }).catch((error)=>{
    console.error(error);
  })
})

app.get('/pokemon/new',(req,res)=>{
  res.render('./New')
     
 })
app.get('/pokemon/:id',(req,res)=>{
  //res.send(req.params.id);
 /* res.render('./Show',{pokemonArr:pokemon[req.params.id]})*/
 console.log(req.params);
Pokemons.findById(req.params.id, (error,foundPokemon)=>{
  res.render('./Show',{pokemonArr:foundPokemon})
})

})

app.listen(PORT,()=>{
    console.log(`server up AT ${PORT}`);

   // call config db.js 
   connectTodb();
 })