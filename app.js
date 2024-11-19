function generateExcuse() {
    const excuses = [
        "El perro se comió mi tarea.",
        "Me quedé atrapado en el tráfico.",
        "Mi despertador no sonó.",
        "Perdí mi cartera.",
        "Me enfermé de repente.",
        "Hubo un apagón en mi casa.",
        "Mi coche se averió.",
        "Tuve una emergencia familiar.",
        "Me equivoqué de día.",
        "No pude encontrar mis llaves."
    ];

    const images = [
        "/src/assets/img/cesarea.jpg",
        "/src/assets/img/image2.jpg",
        "/src/assets/img/image3.jpg",
        "/src/assets/img/image4.jpg",
        "/src/assets/img/image5.jpg",
        "/src/assets/img/image6.jpg",
        "/src/assets/img/image7.jpg",
        "/src/assets/img/image8.jpg",
        "/src/assets/img/image9.jpg",
        "/src/assets/img/image10.jpg"
    ];

    const randomIndex = Math.floor(Math.random() * excuses.length);
    const excuse = excuses[randomIndex];
    const image = images[randomIndex];

    document.getElementById('excusa').innerText = excuse;
    document.getElementById('excuseImage').src = image;
}
// Función para mostrar el formulario
function showForm() {
    document.getElementById('formContainer').style.display = 'block';
}

// Evento de clic para rotar y cambiar la imagen
document.getElementById('excuseImage').addEventListener('click', function() {
    this.classList.add('rotate');
    setTimeout(() => {
        generateExcuse();
        this.classList.remove('rotate');
    }, 500); // Duración de la animación
});


// Evento de clic para rotar y cambiar la imagen
document.getElementById('excuseImage').addEventListener('click', function() {
    this.classList.add('rotate');
    setTimeout(() => {
        generateExcuse();
        this.classList.remove('rotate');
    }, 500); // Duración de la animación
});

// Generar una excusa al cargar la página
window.onload = generateExcuse;


