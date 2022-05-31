const card = document.querySelector('.card')
const button = document.querySelector('.btn')

async function getRandomAdvice(){

    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    const {slip:{advice}} = data

    card.innerHTML = `${advice}`
}

// window.addEventListener("DOMContentLoaded", getRandomAdvice)

button.addEventListener("click", getRandomAdvice)

