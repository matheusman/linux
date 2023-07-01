const obj = {
    arr : [],
    square : 25,
    stars : 3,
}

const randomNumber = () => {
    return Math.floor(Math.random() * obj.square)
}

const result = (index) => {
    if (!(JSON.stringify(obj.arr) === JSON.stringify([]))) {
        obj.arr = []
    }
    for (let e = 0; index > e; e++) {
        let numbers = randomNumber()
        obj.arr.forEach(arr => {
            if (arr == numbers)
                numbers = randomNumber()
        })
        obj.arr.push(numbers)
    }
}

const headerDiv = () => {
    for ( let e = 0; e < obj.square; e++) {
        const square = document.createElement('div')
        square.classList.add('square')
        document.getElementById('squares').appendChild(square)
    }
}

const removeDivs = () => {
    const squares = document.getElementById('squares')
    const square = document.querySelectorAll('.square')
    const stars = document.querySelectorAll('.stars')
    square.forEach( arr => {
        squares.removeChild(arr)
    })
    stars.forEach( (arr, index) => {
        squares.removeChild(arr)
    })
    headerDiv()
}

const gameFunction = () => {
    result(4)
    const square = document.querySelectorAll('.square')
    obj.arr.forEach(e => {
        square[e].classList.remove('square')
        square[e].classList.add('stars')
    })
}

headerDiv()

const appendCircles = (point) => {
    for (let e = 0; e < 3; e++) {
        let circle = document.createElement('div')
        circle.classList.add('animation-' + e)
        circle.classList.add('load')
        point.appendChild(circle)
    }
    
}

document.getElementById('button').addEventListener('click', event => {
    const hidden = document.getElementById('hidden')
    const point = document.createElement('div')
    point.id = 'point'
    const p = document.createElement('p')
    p.innerText = 'Hackeando o servidor'
    p.id = 'text'
    event.target.style.display = 'none'
    hidden.appendChild(p)
    hidden.appendChild(point)
    appendCircles(point)
    setTimeout( () => {
        removeDivs()
        hidden.removeChild(p)
        hidden.removeChild(point)
        gameFunction()
        event.target.style.display = 'block'
    }, 10000)
})

document.querySelector('#button-rede').addEventListener('click', () => {
    const https = document.getElementById('https')
    let arr = ''
    for (let e = 0; e <= 3; e++) {
        arr += https.value[e]
    }
    if (arr === 'http') {
        document.getElementById('sinal').style.display = 'block'
        document.getElementById('spin').style.display = 'block'
        document.getElementById('reload-https').style.display = 'none'
        setTimeout( () => {
            document.getElementById('sinal').style.display = 'none'
            document.getElementById('reload').style.display = 'none'
            document.getElementById('spin').style.display = 'none'
            document.getElementById('index-hack').style.display = 'flex'
            document.querySelector('body').style = 'background-image : url(../img/background-robot.png);'
        }, 7000)
    } else {
        arr = ''
        alert('Coloque o Link do site')
    }
})
