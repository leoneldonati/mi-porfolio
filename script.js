
// script para cambiar título de ventana

let title = document.title;

window.addEventListener('blur', () => {
    title = document.title;
    document.title = '¡Vuelve pronto!  😮 ';
})

window.addEventListener('focus', () => {
    document.title = title;
})