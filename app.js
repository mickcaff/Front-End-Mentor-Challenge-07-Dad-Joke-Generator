const button = document.querySelector('.button')
const mainAdvice = document.querySelector('.joke-main')
const idAdvice = document.querySelector('.joke-id')

const getAdvice = async () => {
    try {
        const res = await fetch('https://icanhazdadjoke.com/', {
            headers: {
            'Accept': 'application/json'
            }
        })
        const data = await res.json()
        console.log(data)
        return data
    } catch (e) {
        console.log("ERROR:". e)
    }
}

const addAdvice = async () => {
    const data = await getAdvice()
    joke = data.joke
    mainAdvice.textContent = joke
    idAdvice.textContent = Math.ceil(Math.random()*10000)
}

button.addEventListener('click', addAdvice)



