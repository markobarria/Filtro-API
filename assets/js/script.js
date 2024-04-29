function consultarChiste(categoria) {
    fetch(`https://api.chucknorris.io/jokes/random?category=${categoria}&lang=es`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultado').innerText = data.value;
        });
}