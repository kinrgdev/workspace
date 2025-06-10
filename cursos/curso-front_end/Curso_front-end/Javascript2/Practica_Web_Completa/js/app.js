//MENÚ RESPONSIVE
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menu-bar"),
    enlaces = document.getElementById("enlaces");

    //Click abrir
    btnMenuOpen.addEventListener("click", function(){
        menuResponsive.classList.add("active");
    })

    //Click cerrar
    btnMenuClose.addEventListener("click", function(){
        menuResponsive.classList.remove("active");
    })

    //Cerrar menú con elementos de enlace
    enlaces.addEventListener("click", function(){
        menuResponsive.style.transitionDelay = "0.5s"
        menuResponsive.classList.remove("active");

    })

//SLIDER DE PRODUCTOS
var contenedor = document.querySelector('.slider'), //Permite acceder a cualquier elemento; ID, clase, etc
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnDerecho = document.getElementById("btn-derecha");

    //EVENTO PARA BOTÓN DERECHO
    btnDerecho.addEventListener("click", function(){
        contenedor.scrollLeft += contenedor.offsetWidth; /*El scroll de ese contenedor va a ser igual más el offsetWidth.
                                                           offsetWidth es el tamaño total que puede hacer scroll mi contenedor.
                                                           El contenedor va a ser igual a ese tamaño total
                                                           Scroll al tamaño total de mi página y va a siguiente elemento */ 
    });

    //EVENTO PARA BOTÓN IZQUIERDO
    btnIzquierdo.addEventListener("click", function(){
        contenedor.scrollLeft -= contenedor.offsetWidth; /*El scroll de ese contenedor va a ser igual más el offsetWidth.
                                                        offsetWidth es el tamaño total que puede hacer scroll mi contenedor.
                                                        El contenedor va a ser igual a ese tamaño total
                                                        Scroll al tamaño total de mi página y va a siguiente elemento */ 
    });


// VALIDACIÓN DE FORMULARIO
var formulario = document.getElementById("formulario");

    function validar(e){
        var inputNombre = document.getElementById("nombre"),
            inputEmail = document.getElementById("email"),
            inputComents = document.getElementById("comentarios"),
            alertSuccess = document.getElementById("alertSuccess"),
            alertError = document.getElementById("alertError");

        if(inputNombre.value == 0 || inputEmail.value == 0 || inputComents.value == 0){
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add("show");
            
            setTimeout(function() {
                alertError.classList.remove("show");
                alertError.classList.add("hide");
                
            }, 2000);
        }else{
            e.preventDefault();
            alertSuccess.classList.remove("hide");
            alertSuccess.classList.add("show");
            
            setTimeout(function() {
                alertSuccess.classList.remove("show");
                alertSuccess.classList.add("hide");
                
            }, 2000);
            //Esto vacía los inputs enviados
            inputNombre.value = "";
            inputEmail.value = "";
            inputComents.value = "";
        }
    }

//EVENTOS DEL FROMULARIO
formulario.addEventListener("submit", validar);


//BOTÓN SCROLL TOP
var btnTop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");


//DETECTAR SCROLL EN WEB
window.addEventListener("scroll", function(){
    var scroll = document.documentElement.scrollTop,   //documentElement es el html padre //Mide los px del scroll en la consola
        fullSize = document.documentElement.offsetHeight,    //La altura completa del html
        sizeVP = document.documentElement.clientHeight; //El alto que muesta de la pantalla actual
    
    if(scroll > 100){
        btnTop.classList.add("show");
    }else{
        btnTop.classList.remove("show");

    }

    //MODIFICAR ELEMENTO CUANDO LLEGUE A FINAL DE PÁGINA
    if (fullSize == (scroll + sizeVP)) {
        btnTop.classList.add("scrollFinal");
    }else{
        btnTop.classList.remove("scrollFinal");
    }
})

//DETECTAR EVENTO CLICK EN BOTÓN
btnTop.addEventListener("click", function(){
    window.scrollTo(0,0) //tiene dos parámetros; x , y
})

//DETECTAR EVENTO CLICK EN EL LOGO
logo.addEventListener("click", function(){
    window.scrollTo(0,0) //tiene dos parámetros; x , y
})