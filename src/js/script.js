function digitador(elemento) {
    const letras = elemento.innerHTML.split('')
    elemento.innerHTML = ''

    letras.forEach((letra, index) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 60 * index)
    });
}

const menu = () => {
    const menu = document.querySelector('#menu')

    if (!menu.classList.contains('blue') && window.pageYOffset > (screen.height * 0.75)) {
        menu.classList.add('blue')
    } else if (menu.classList.contains('blue') && window.pageYOffset <= (screen.height * 0.75)) {
        menu.classList.remove('blue')
    }
}

const dataAnime = (elementosAnimados) => {
    const windowTop = window.pageYOffset + (screen.height * 0.7) 

    elementosAnimados.forEach(elemento => {
        if (windowTop > elemento.offsetTop) {
            elemento.classList.add('animate')
        } else {
            elemento.classList.remove('animate')
        }
    })
}

function scroll() {
    const elementosAnimados = document.querySelectorAll("[data-anime]")

    document.addEventListener('scroll', () => {
        menu()
        dataAnime(elementosAnimados)
    })
    
}

function hoverLink() {
    document.querySelector("#github-link > a").onmouseenter = () => {
        document.querySelector("#github-link > span").style.transform = "translateX(0px)"
    }

    document.querySelector('#github-link').onmouseout = () => {
        document.querySelector("#github-link > span").style.transform = "translateX(-100px)"
    }
}

let h1 = document.querySelector('#banner h1')
digitador(h1)
scroll()
hoverLink()