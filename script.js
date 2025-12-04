// Demo Interactiva de Box-Sizing

const widthSlider = document.getElementById('widthSlider');
const paddingSlider = document.getElementById('paddingSlider');
const borderSlider = document.getElementById('borderSlider');

const widthValue = document.getElementById('widthValue');
const paddingValue = document.getElementById('paddingValue');
const borderValue = document.getElementById('borderValue');

// Nuevos selectores de color
const borderColorInput = document.getElementById('borderColor');
const bgColorInput = document.getElementById('bgColor');
const textColorInput = document.getElementById('textColor');

const demoContentBox = document.getElementById('demoContentBox');
const demoBorderBox = document.getElementById('demoBorderBox');

const totalContentBox = document.getElementById('totalContentBox');
const totalBorderBox = document.getElementById('totalBorderBox');

function updateBoxes() {
    const width = parseInt(widthSlider.value);
    const padding = parseInt(paddingSlider.value);
    const border = parseInt(borderSlider.value);
    
    // Actualizar valores de sliders
    widthValue.textContent = `${width}px`;
    paddingValue.textContent = `${padding}px`;
    borderValue.textContent = `${border}px`;
    
    // Obtener valores de color
    const borderColor = borderColorInput.value;
    const bgColor = bgColorInput.value;
    const textColor = textColorInput.value;
    
    // Aplicar estilos dimensionales y de color
    [demoContentBox, demoBorderBox].forEach(box => {
        box.style.width = `${width}px`;
        box.style.padding = `${padding}px`;
        box.style.borderWidth = `${border}px`;
        // Aplicar colores
        box.style.borderColor = borderColor;
        box.style.backgroundColor = bgColor;
        box.style.color = textColor;
    });
    
    // Aplicar color al texto de los totales (para que resalte el resultado)
    totalContentBox.style.color = borderColor;
    totalBorderBox.style.color = borderColor;

    // Calcular y mostrar totales
    // content-box: width + padding*2 + border*2
    const contentBoxTotal = width + (padding * 2) + (border * 2);
    // border-box: width (incluye padding y border)
    const borderBoxTotal = width;
    
    totalContentBox.textContent = `Total: ${contentBoxTotal}px`;
    totalBorderBox.textContent = `Total: ${borderBoxTotal}px`;
}

// Event listeners para sliders
widthSlider.addEventListener('input', updateBoxes);
paddingSlider.addEventListener('input', updateBoxes);
borderSlider.addEventListener('input', updateBoxes);

// Event listeners para selectores de color
borderColorInput.addEventListener('input', updateBoxes);
bgColorInput.addEventListener('input', updateBoxes);
textColorInput.addEventListener('input', updateBoxes);

// Inicializar
updateBoxes();

console.log('📦 Box-sizing demo actualizada con paleta de colores.');
console.log('🎨 ¡Experimenta con el tamaño y los colores!');