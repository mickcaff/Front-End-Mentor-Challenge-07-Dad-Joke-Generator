const button = document.querySelector('.button')
const mainAdvice = document.querySelector('.advice-main')
const idAdvice = document.querySelector('.advice-id')

const getAdvice = async () => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json()
        console.log(data.slip)
        return data
    } catch (e) {
        console.log("ERROR:". e)
    }
}

const addAdvice = async () => {
    const data = await getAdvice()
    advice = data.slip.advice
    id = data.slip.id
    mainAdvice.textContent = advice
    idAdvice.textContent = id
}

button.addEventListener('click', addAdvice)



