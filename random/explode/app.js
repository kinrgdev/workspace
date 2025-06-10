$(document).ready(function(){
    // Guardamos la imagen original y su contenedor
    var originalImage = $(".image").clone();  // Clonamos el HTML original de la imagen

    $(".explode").click(function(){
        console.log("Animación activada");

        // Explota la imagen
        $(".image").explode({
            "minWidth": 3,
            "maxWidth": 6,
            "radius": 300,
            "minRadius": 15,
            "release": false,
            "fadeTime": 300,
            "recycle": false,   // No reciclamos automáticamente
            "recycleDelay": 500, 
            "explodeTime": 517,
            "round": false,
            "minAngle": 0,
            "maxAngle": 360,
            "gravity": 1,
            "groundDistance": 236
        });

        // Esperamos un tiempo para restaurar la imagen
        setTimeout(function() {
            console.log("Recomponiendo la imagen...");
            
            // Restauramos la imagen clonada
            $(".container").html(originalImage);  // Reemplazamos todo el contenedor de la imagen con la imagen original

            // Aseguramos que la imagen restaurada pueda volver a explotar
            $(".image").click(function() {
                $(".image").explode({
                    "minWidth": 3,
                    "maxWidth": 6,
                    "radius": 600,
                    "minRadius": 15,
                    "release": false,
                    "fadeTime": 300,
                    "recycle": false,
                    "recycleDelay": 500, 
                    "explodeTime": 517,
                    "round": false,
                    "minAngle": 0,
                    "maxAngle": 360,
                    "gravity": 1,
                    "groundDistance": 236
                });
            });

            // Hacemos la transición de la imagen para que se vea suave
            $(".image").hide().fadeIn(1000);  // Desaparece y aparece suavemente

        }, 15000);  // Ajusta el tiempo de espera según la duración de la animación
    });
});
