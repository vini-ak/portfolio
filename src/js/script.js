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
    } 
}

const redesSociais = () => {
    const redesSociais = document.querySelector('#redes-sociais')

    if (window.pageYOffset > (screen.height * 0.8)) {
        redesSociais.style.zIndex = "2"
    }
}

const dataAnime = (elementosAnimados) => {
    const windowTop = window.pageYOffset + (screen.height * 0.8) 

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
        redesSociais()
        dataAnime(elementosAnimados)
    })
    
}

let h1 = document.querySelector('#banner h1')
digitador(h1)
scroll()