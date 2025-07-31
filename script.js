

const key = "d30e5bbb82309834705312e0c1025095";

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = "Atual: " + Math.floor(dados.main.temp) + "°C";
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    document.querySelector(".temp-marcador").innerHTML = Math.floor(dados.main.temp_max) + "°C  ";
    document.querySelector(".temp-marcador2").innerHTML = Math.floor(dados.main.temp_min) + "°C ";

    console.log(dados);
}


async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    colocarDadosNaTela(dados);
}


function cliqueiNobotao() {
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade);
}