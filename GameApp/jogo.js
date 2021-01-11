var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criarMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', "")

if (nivel === 'normal') {
    //1500
    criarMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    //1000
    criarMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
    //750
    criarMosquitoTempo = 750
}



function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
    document.getElementById('cronometro').innerHTML = tempo
    tempo -= 1

    if (tempo < 0 && vidas <= 3) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'win.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)


function posicaoRandomica() {

    //Remover a mosca anterior (caso exista)
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        if (vidas > 3) {

            window.location.href = 'gameover.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 50 : posicaoX
    posicaoY = posicaoY < 0 ? 50 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function() {
        this.remove()
    }


    document.body.appendChild(mosca)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosca1'

        case 1:
            return 'mosca2'

        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}