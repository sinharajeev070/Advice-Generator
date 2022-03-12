const advice = document.getElementById("advice");
const advice_id = document.getElementById("advice-id");

advice.innerText = "LOADING ADVICE..."

fetch("https://api.adviceslip.com/advice").then(response =>{
    response.json().then(response=>{
        advice_id.innerHTML = "ADVICE #" + response.slip.id;
        advice.innerText=response.slip.advice;
    })
})