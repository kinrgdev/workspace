document.addEventListener('DOMContentLoaded', function () {
  // Inicialización de Quill desde un archivo JSON
  fetch('../config/config-quill.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON');
      }
      return response.json();
    })
    .then(config => {
      const quill = new Quill('#editor', config);

      function undo() {
        quill.history.undo();
      }
      function redo() {
        quill.history.redo();
      }

      const toolbar = quill.getModule('toolbar');
      toolbar.addHandler('undo', undo);
      toolbar.addHandler('redo', redo);

      const textarea = document.getElementById('contenido');
      quill.on('text-change', function () {
        textarea.value = quill.root.innerHTML;
      });

      //!!!!!!!!! Observer to track mutations in the editor and adjust images
const editorObserver = new MutationObserver((mutationsList) => {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach(node => {
        if (node.tagName === 'IMG') {
          node.classList.add('img-responsive');
        }
      });
    }
  }
});

editorObserver.observe(quill.root, { childList: true, subtree: true });


      // Tooltips personalizados en la barra de herramientas
      const tooltips = {
        'ql-bold': 'Negrita',
        'ql-italic': 'Cursiva',
        'ql-underline': 'Subrayado',
        'ql-list': 'Lista',
        'ql-link': 'Enlace',
        'ql-image': 'Imagen',
        'ql-header-1': 'Encabezado 1',
        'ql-header-2': 'Encabezado 2',
      };

      Object.entries(tooltips).forEach(([className, tooltip]) => {
        const button = document.querySelector(`.${className}`);
        if (button) {
          button.setAttribute('title', tooltip);
        }
      });

      // Previsualización dinámica en un iframe
      const previewContainer = document.getElementById('preview-container');
      const previewIframe = document.getElementById('preview-iframe');

      document.getElementById('b-preview').addEventListener('click', function (event) {
        event.preventDefault();

        let contenidoHTML = quill.root.innerHTML;

        // Extraer el encabezado (h1) si existe
        const tempElement = document.createElement('div');
        tempElement.innerHTML = contenidoHTML;

        let seccionTexto = '';
        const h1Element = tempElement.querySelector('h1');
        if (h1Element && h1Element.innerText.trim() !== '') {
          seccionTexto = h1Element.innerText.trim();
          h1Element.remove();
        } else {
          seccionTexto = 'Sin título';
        }

        contenidoHTML = tempElement.innerHTML;

        // Crear la previsualización del contenido dentro del iframe
        const iframeDocument = previewIframe.contentDocument || previewIframe.contentWindow.document;

        // Limpiar el iframe antes de insertar el nuevo contenido
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
                      <h1>${seccionTexto}</h1>
                      ${contenidoHTML}
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

        const applyResponsiveClass = () => {
          iframeDocument.querySelectorAll('article img').forEach(img => {
            img.classList.add('img-responsive');
            // Ajustar la posición de las imágenes aquí
            img.style.position = 'relative';
            img.style.top = '0';
            img.style.left = '0';
          });
        };
        
        applyResponsiveClass();
        
        //!!!!!!! Observer to track mutations in the iframe and adjust images
        const iframeObserver = new MutationObserver(applyResponsiveClass);
        iframeObserver.observe(iframeDocument.body, { childList: true, subtree: true });
        

        // Mostrar el contenedor de la previsualización
        previewContainer.style.display = 'block';

        // Asignar clase "img-responsive" a todas las imágenes dentro del artículo
        iframeDocument.querySelectorAll('article img').forEach(img => {
          img.classList.add('img-responsive');
        });

        console.log('seccionTexto:', seccionTexto);
        console.log('contenidoHTML:', contenidoHTML);
      });

      // Validación antes del envío del formulario
      const form = document.querySelector('form');
      form.addEventListener('submit', function (event) {
        const texto = quill.root.innerText.trim(); // Obtener solo texto plano
        if (!texto) {
          event.preventDefault();
          alert('Por favor, escribe algo en el editor antes de enviar.');
        }
      });

      // Configuración de estilos adicionales
      document.querySelectorAll('article img').forEach(img => {
        img.classList.add('img-responsive');
      });

    })
    .catch(error => {
      console.error('Error al inicializar Quill:', error);
    });
});
