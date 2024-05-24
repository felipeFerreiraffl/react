export function ApiClima() {
    const nome = document.querySelector("#nome-local").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nome}&lang=pt_br&units=metric&appid=4d04b0dc4b016dbde26edb8ae6abd73a`;

    fetch(url)
    .then(resposta =>{
        // console.log(resposta)
        return resposta.json()
    })
    .then(dados =>{
        console.log(dados);

        document.querySelector("#local").value = dados.name;
        document.querySelector("#temperatura").value = dados.main.temp + " ºC";
        document.querySelector("#descricao").value = dados.weather[0].description;
    })
    .catch(erro => {
        console.log(erro);
    })
}