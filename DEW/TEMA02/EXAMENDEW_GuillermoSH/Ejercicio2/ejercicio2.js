async function leerApi(pagina, tamPagina) {
    persona = await fetch("https://randomuser.me/api/?page=" + pagina + "&results=" + tamPagina + "&seed=abc")
    .then(response => {
        return response.json();
    })
    .then(data => {
        return data;
    })
}

console.log(leerApi(1,10));