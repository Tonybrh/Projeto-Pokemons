const ul = document.querySelector('.list')




fetch ('https://pokeapi.co/api/v2/pokemon').then((response)=>{
    response.json().then((dados)=>{
        dados.
        ul.innerHTML += `<li>${}`
        console.log(response)
    })
})
