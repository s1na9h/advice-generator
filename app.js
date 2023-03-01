let adviceId
let advice
const adviceNumber = document.getElementById('advice-number')
const theAdvice = document.getElementById('advice')
async function getAdvice(){
let response
let data
 response = await fetch('https://api.adviceslip.com/advice')
 data = await response.json()
 adviceId= data.slip.id
 advice= data.slip.advice
}

getAdvice().then(()=>{
    adviceNumber.innerHTML= adviceId
    theAdvice.innerHTML= advice
});

document.querySelector('.dice-container').addEventListener('click',(e)=>{
    getAdvice().then(()=>{
        adviceNumber.innerHTML= adviceId
        theAdvice.innerHTML= advice
    });
})