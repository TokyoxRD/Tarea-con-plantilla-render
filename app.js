const express = require('express');
const path = require('path');
const app = express();

// Configuración del puerto:
// Render usa la variable de entorno process.env.PORT. 
// Si no existe (como en tu PC), usará el puerto 3000.
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (CSS, Imágenes, JS de la plantilla)
// Asegúrate de que la carpeta 'public' esté en la raíz de tu proyecto
app.use(express.static(path.join(__dirname, 'public')));

// Rutas principales para navegar por tu plantilla
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/service', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'service.html'));
});

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'gallery.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Manejo de error 404 (Página no encontrada)
app.use((req, res) => {
    res.status(404).send('Lo sentimos, no se pudo encontrar esa página.');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor activo en: http://localhost:${PORT}`);
    console.log('Presiona Ctrl+C para detener el servidor');
});