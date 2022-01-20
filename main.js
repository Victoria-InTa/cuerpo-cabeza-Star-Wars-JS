let contenedor = document.querySelector('.contenedor')
let cuerpo = document.querySelector('.cuerpo')

document.body.addEventListener('mousemove', (e)=>{
    let valor = e.clientX
    contenedor.style.transform = `translateX(${valor}px)`
    cuerpo.style.transform = `rotate(${valor}deg)`
})