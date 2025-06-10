document.addEventListener('DOMContentLoaded', function () {
    fetch('../config/config-quill.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
      })
      .then(config => {
        // Inicializar Quill con la configuración desde el archivo JSON
        const quill = new Quill('#editor', config);

        // Función para centrar imágenes
        function centerImage() {
          const range = quill.getSelection();
          if (range) {
            const [leaf] = quill.getLeaf(range.index);
            if (leaf && leaf.domNode && leaf.domNode.tagName === 'IMG') {
              leaf.domNode.style.display = 'block';
              leaf.domNode.style.margin = 'auto';
            }
          }
        }

        // Función para redimensionar imágenes
        function resizeImage() {
          const range = quill.getSelection();
          if (range) {
            const [leaf] = quill.getLeaf(range.index);
            if (leaf && leaf.domNode && leaf.domNode.tagName === 'IMG') {
              const newSize = prompt('Ingresa el nuevo tamaño en píxeles (ejemplo: 100 para 100px de ancho):');
              if (newSize && !isNaN(newSize)) {
                leaf.domNode.style.width = `${newSize}px`;
              } else {
                alert('Por favor ingresa un número válido.');
              }
            }
          }
        }

        // Añadir los iconos personalizados para alinear y redimensionar imágenes
        const toolbar = quill.getModule('toolbar');
        toolbar.addHandler('align', centerImage);
        toolbar.addHandler('resize', resizeImage);

        // Agregar el icono personalizado para el botón de redimensionar
        const resizeButton = document.querySelector('.ql-resize');
        if (resizeButton) {
          resizeButton.innerHTML = `
            <svg viewBox="0 0 24 24" width="18" height="18">
              <rect fill="none" height="24" width="24"/>
              <path fill="currentColor" d="M15,16h3v3h-3V16z M15,14h5v5h-5V14z M16,8V5h-3v3H16z M8,8H5v3h3V8z M16,8h3V5h-3V8z M8,8V5H5v3H8z"/>
            </svg>
          `;
          resizeButton.style.cursor = 'pointer';
          resizeButton.addEventListener('click', resizeImage);
        }

        // Función para actualizar la previsualización
        function updatePreview() {
          const contenidoHTML = quill.root.innerHTML;

          // Extraer el primer <h1> si existe
          const tempElement = document.createElement('div');
          tempElement.innerHTML = contenidoHTML;

          let seccionTexto = 'Sin título'; // Valor por defecto
          const h1Element = tempElement.querySelector('h1');

          if (h1Element && h1Element.innerText.trim() !== '') {
            seccionTexto = h1Element.innerText.trim();
            h1Element.remove(); // Eliminar el <h1> del contenido
          }


          const iframe = document.getElementById('preview-iframe');
          const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="../style/style.css">
                <title>${seccionTexto} - Kin Culture</title>
            </head>
            <body>
                <header>
                    <h1>Kin Culture</h1>
                </header>
                <nav>
                    <ul class="pagination">
                        <li class="nav"><a href="index.html">Portada</a></li>
                        <li class="nav"><a href="post.html">Críticas</a></li>
                        <li class="nav"><a href="news.html">Noticias</a></li>
                        <li class="nav"><a href="gallery.html">Galería</a></li>
                        <li class="nav"><a href="bios.html">Bios</a></li>
                        <li class="nav"><a href="contact.html">Contacto</a></li>
                    </ul>
                </nav>
                <main>
                    <article id="post-container">
                    ${tempElement.innerHTML}  <!-- Contenido sin el <h1> -->
                    </article>
                    <aside>
                        <h3>Histórico</h3>
                    </aside>
                </main>
                <footer>
                    <p>Creado por KinRGdev <br> Las imágenes pertenecen a sus legítimos dueños</p>
                </footer>
            </body>
            </html>
          `);
          iframeDocument.close();

          // Asignar clase "img-responsive" a todas las imágenes dentro del iframe
          iframeDocument.querySelectorAll('article img').forEach(img => {
            img.classList.add('img-responsive');
          });

          // Mostrar el contenedor de la previsualización
          document.getElementById('preview-container').style.display = 'block';
        }

        document.getElementById('b-preview').addEventListener('click', function (event) {
          event.preventDefault();
          updatePreview();
        });
      })
      .catch(error => {
        console.error('Error al inicializar Quill:', error);
      });
});
