var palabra = "TRIBUTACION";
var palabras=["PERRO",
                "LIBELULA",
                "MOSQUITO",
                "ELEFANTE",
                "HIPOPOTAMO",];

var Ahorcado = function (con) {
    this.contexto = con;
    this.maximo = 5;
    this.intentos = 0;
    this.vivo = true;
}
function iniciar() {
     l =document.getElementById("letra");
    f=document.getElementById("fallos");
    var b=document.getElementById("boton");
    var canvas = document.getElementById("c");

    //GENERAMOS PALABRA ALEATORIA:
    var ale = Math.round(Math.random()*palabras.length);
    palabra=palabras[ale];


    canvas.width = 500;
    canvas.height = 400;

    var contexto = canvas.getContext("2d");
     hombre=new Ahorcado(contexto);
    palabra=palabra.toUpperCase();

    espacio=new Array(palabra.length);//declaro un array de acuerdo al tam de la palabra a adivinar
    //agregamos una funcion que se dispare al dar click:
    b.addEventListener("click",agregarLetra);

    mostrarPista(espacio);
}
function agregarLetra(e){
   var letra=l.value;
    l.value="";

   mostrarPalabra(palabra,hombre,letra);

}
function pulsaEnter(e) {
    if (e.keyCode == 13) {
       var letra=l.value;
        l.value="";
        mostrarPalabra(palabra,hombre,letra);

    }
}
function mostrarPalabra(palabra,ahorcado,letra){
    var encontrado=false;
    var p;
    letra =letra.toUpperCase();
    //recorrer con un ciclo letra por letra
    for (p in palabra){ //p es el iterador
        if(letra==palabra[p]){
            espacio[p]=letra;

            encontrado=true;

        };
    }
    mostrarPista(espacio);

    if(!encontrado){
        ahorcado.trazar();
        f.innerText+=letra+", "
    }
    if(!ahorcado.vivo){
        //mostrar la palabra entera
        alert("Has perdido zoquetico!!");
    }
     comprobarCompleta();

}
function mostrarPista(espacio){
    var pista=document.getElementById("pista");
    var texto="";
    var i;
    var largo=espacio.length;
    for(i=0;i<largo;i++){
        if(espacio[i]!= undefined){
            texto=texto+espacio[i]+" ";
        }else{
            texto+="_ ";
        };
    }
    pista.innerText=texto;


}
function comprobarCompleta(){
    var largo=espacio.length;
    var contador=0;
    for(i=0;i<largo;i++){
         if(espacio[i]>="A" && espacio[i]<="Z"){
             contador++;
        }
    }


    if (contador==espacio.length){
        alert("La has acertado! MUY BIEN!!");
    }
}
