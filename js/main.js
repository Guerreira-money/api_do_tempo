//site de meteorologia openweather 9c5d0b1c9c2453d2aa24cedcbeb5708f api
//https:api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const key = "9c5d0b1c9c2453d2aa24cedcbeb5708f"
//conseguimos pegar o valor do input
//1° funçao
//function cliqueiNoBotao(){
 //   const input = document.querySelector("input").value

// console.log(input);

//}
// criando a 3° funçao
function mostrarDadosNaTela(dados){
document.querySelector("h2").innerHTML = dados.name
document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp)+ "°C"
document.querySelector(".prevision-text").innerHTML = dados.weather[0].description
document.querySelector(".umidade").innerHTML = dados.main.humidity   + "%  umidade"
document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
}



// agora na função anterior, iremos chamar dentro dela outra função. Para isso é só criar a nova função e mudar os atributos.
//o input deixará de ser input
//criando a 2° funçao

async function buscarCidade(cidade){
   
    
    const dados = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta=> resposta.json())
    mostrarDadosNaTela(dados)
}

//alterando a 1° função

function cliqueiNoBotao(){
    const cidade = document.querySelector("input").value

 buscarCidade(cidade)

}