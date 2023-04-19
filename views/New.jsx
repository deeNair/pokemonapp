const React = require('react');

function New(){
    return(
        <div style={{backgroundColor:'#F0F0F0',color:'black' }}>
            <h1 style={{backgroundColor:'#3C486B',color:'black',padding:'50px'}}> Enter Pokemon info</h1>
            <form action='/pokemon' method='Post'>
                Name:<input type="text" name="name" />
                Image:<input type="text" name="img" />
                <input type="submit" value="create new Pokemon"/>
            </form>
            <h2><a href={`/pokemon`}>view all pokemons</a></h2>
        </div>
    )

}
module.exports=New;