// Inicialización y configuración dinámica del framework Reveal.js
// Proyecto: Fundamentos de JavaScript para Entornos de Aprendizaje (SENA ADSO)

document.addEventListener('DOMContentLoaded', () => {
    Reveal.initialize({
        // Activa el guardado automático del estado de la diapositiva en la URL
        hash: true,
        
        // Controles de navegación visual en la esquina inferior derecha
        controls: true,
        
        // Muestra barra de progreso de lectura en la parte inferior
        progress: true,
        
        // Guarda el historial de navegación en el navegador web
        history: true,
        
        // Centrado vertical automático de todos los elementos de la diapositiva
        center: true,
        
        // Efecto de transición entre diapositivas
        transition: 'slide', // Opciones válidas: none/fade/slide/convex/concave/zoom
        
        // Inclusión de dependencias externas para análisis sintáctico de código fuente
        plugins: [ RevealHighlight ]
    });
});
