let display = document.getElementById('screen');

const wipe = () => {
    display.value = '';
}

const show = (n) => {
    display.value += n;
}

const calc = () => {
    let resultado = eval(display.value);
    display.value = resultado.toFixed(2);
}