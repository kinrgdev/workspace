document.addEventListener("DOMContentLoaded", function() {
    const previewBtn = document.querySelector("#preview-button");
    const saveBtn = document.querySelector("#save-button");
    const output = document.querySelector(".output");
    const seccionSelect = document.querySelector("#seccion");

    const toolbarOptions = [
        [{ font: [] }],
        [{ header: [1, 2, 3] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        ["blockquote", "code-block"],
        ["link", "image", "video"],
        [{ align: [] }],
    ];

    const quill = new Quill("#editor-container", {
        theme: "snow",
        modules: {
            toolbar: toolbarOptions,
        },
    });

    previewBtn.addEventListener("click", () => {
        const content = quill.root.innerHTML;
        const previewWindow = window.open("", "_blank");
        previewWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="../style/style.css">
                <title>Previsualización</title>
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
                    <article>${content}</article>
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
    });

    saveBtn.addEventListener("click", () => {
        const content = quill.root.innerHTML;
        const seccion = seccionSelect.value;
        fetch("save-content.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: content,
                seccion: seccion,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(`Content saved to section: ${data.seccion}`);
        })
        .catch(error => {
            console.error("Error saving content:", error);
        });
    });
});
