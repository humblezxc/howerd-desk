const board = document.querySelector('#board')
const colors = ['#F0F8FF', '#7FFFD4', '#DC143C', '#00FFFF', '#9932CC']
const SQUARES_NUMBER = 500
const SQUARE_SIZE = 20

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.style.width = `${SQUARE_SIZE}px`
    square.style.height = `${SQUARE_SIZE}px`

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    element.style.backgroundColor = getRandomColor()
    element.style.boxShadow = `0 0 2px ${getRandomColor()}, 0 0 10px ${getRandomColor()}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
    const index= Math.floor(Math.random() * colors.length)
    return colors[index]

}
