// Selecciona los elementos utilizando sus clases
document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.querySelector(".v9_22");
    const button2 = document.querySelector(".v9_23");
    const button3 = document.querySelector(".v9_24");
    const button4 = document.querySelector(".v9_51");

    // Asocia funciones a los eventos de clic para cada botón
    button1.addEventListener("click", function() {
        alert("Botón 1 presionado");
    });

    button2.addEventListener("click", function() {
        alert("Botón 2 presionado");
    });

    button3.addEventListener("click", function() {
        alert("Botón 3 presionado");
    });

    button4.addEventListener("click", function() {
        alert("Botón 4 presionado");
    });
});
