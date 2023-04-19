const React= require('react');

function Index(props){
  const {pokemonArr}=props;

    const myStyle={
        color: '#000000',
        backgroundColor: '#3C486B',
    };

  return (
    <div style={myStyle}>
      <h1>Index page</h1>
      <h2><a style={myStyle} href={`/pokemon/new`}>create new pokemons</a></h2>
       <ul>{

        pokemonArr.map((pokemon1,i)=>{
          const pk= pokemon1.name;
          return(
           
           <li key={pokemon1._id}><h1>{pk.charAt(0).toUpperCase()+pk.slice(1)}</h1>
             <h2><a  style={myStyle} href={`/pokemon/${pokemon1._id}`}>{pokemon1.name}</a></h2>
           </li>

          )

        })
        
        }
        </ul>
    
    
    </div>
  )
}

module.exports = Index;

// <a href="{pokemon1.img}">{pokemon1.name}</a>

//<h2><a href={`/pokemon/${i}`}>{pokemon1.name}</a></h2>