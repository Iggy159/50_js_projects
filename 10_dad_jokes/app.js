const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

jokeBtn.addEventListener('click', generateJoke)



function generateJoke() {

    fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json()
    }).then(adviceData => {
    const Adviceobj = adviceData.slip
    jokeEl.innerHTML = `<p>${Adviceobj.advice}</p>`
    }).catch(error => {
    console.log(error)})
}


