const React= require('react');

function Show(props){
  const {pokemonArr}=props;
  return (
    <div><h1>Gotta Catch 'Em All</h1>
      <h2>{pokemonArr.name}
      </h2>
      <img src={pokemonArr.img+".jpg"}/>
      <h2><a href={`/pokemon`}>view all pokemons</a></h2>
      
      </div>
  )
}

module.exports = Show;

//<img src={pokemonArr.img+".jpg"}/>