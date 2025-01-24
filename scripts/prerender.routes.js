const TOTAL_POKEMONS = 151;
const TOTAL_PAGES = 5;


( async () => {
  const fs = require('fs');

  // By ID
  const pokemonsId = Array.from({length: TOTAL_POKEMONS}, (_, i) => i + 1);
  let fileContent = pokemonsId.map((id) => {
    return `/pokemons/${id}`
  }).join('\n');

  //BY PAGES
  const pages = Array.from({length: TOTAL_PAGES}, (_,i) => i + 1);
  pages.map((page) => fileContent += `\n/pokemons/page/${page}`).join('\n');

  // BY NAME
  const pokemosNames = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`)
    .then( res => res.json())

  fileContent += '\n';

  fileContent += pokemosNames.results.map((pokemon) => `/pokemons/${pokemon.name}`).join('\n');
  fs.writeFileSync('routes.txt', fileContent + '\n');
  console.log(fileContent);
}  )()
