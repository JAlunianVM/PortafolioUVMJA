let imagenIndex = 0;  // Variable para llevar el control de la imagen actual
const imagenes = [
    'conejo.jpg',
    'conejo2.jpg',
    'conejo3.jpg',
    'conejo4.jpg',
    'conejo5.jpg'
];

function cambiarImagen() {
    imagenIndex++;  // Aumentamos el índice para seleccionar la siguiente imagen

    if (imagenIndex >= imagenes.length) {
        imagenIndex = 0;  // Si se llegó al final de las imágenes, volvemos a la primera
    }

    // Cambiamos la imagen del <img> con id "mi-imagen"
    document.getElementById('mi-imagen').src = imagenes[imagenIndex];
}