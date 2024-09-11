// Seleccionar los elementos HTML
const verdeSlider = document.getElementById('verdeSlider');
const rojoSlider = document.getElementById('rojoSlider');
const verdeBox = document.getElementById('verdeBox');
const rojoBox = document.getElementById('rojoBox');
const hexVerdeText = document.getElementById('hexVerde');
const hexRojoText = document.getElementById('hexRojo');

// Función para convertir valores RGB a Hexadecimal
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

// Función para actualizar el color verde según el valor del slider
verdeSlider.addEventListener('input', function() {
    const greenValue = verdeSlider.value;
    const verdeRGB = `rgb(0, ${greenValue}, 0)`;
    const verdeHex = rgbToHex(0, parseInt(greenValue), 0);
    verdeBox.style.backgroundColor = verdeRGB;
    hexVerdeText.textContent = verdeHex;
});

// Función para actualizar el color rojo según el valor del slider
rojoSlider.addEventListener('input', function() {
    const redValue = rojoSlider.value;
    const rojoRGB = `rgb(${redValue}, 0, 0)`;
    const rojoHex = rgbToHex(parseInt(redValue), 0, 0);
    rojoBox.style.backgroundColor = rojoRGB;
    hexRojoText.textContent = rojoHex;
});




