const ul = document.querySelector('.list')




async function getpokes() {
    ul.innerHTML = "Carregando...";
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await response.json()
      montarPoke(json);
    } catch (error) {
      console.error(error);
    }
  }
function montarPoke(lista){
    for(let i in lista){
        ul.innerHTML = `${lista}`
    }
  }

  