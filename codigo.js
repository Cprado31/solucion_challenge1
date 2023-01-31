function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i=es para que afecte mayus, como minus
    //g=es para que afecte la linea u oracion
    //m=es para que afecta a multiples lineas o parrafos
    var textoCifrado = texto.replace(/e/igm,"enter");
    var textoCifrado = textoCifrado.replace (/o/igm,"ober");
    var textoCifrado = textoCifrado.replace(/i/igm,"imes");
    var textoCifrado = textoCifrado.replace(/a/igm,"ai");
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgMunheco").style.display = "none"; 
    document.getElementById("texto").style.display = "none"; 
    document.getElementById("texto2").innerHTML = textoCifrado; 
    document.getElementById("copiar").style.display = "mostrar"; 
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i=es para que afecte mayus, como minus
    //g=es para que afecte la linea u oracion
    //m=es para que afecta a multiples lineas o parrafos
    var textoCifrado = texto.replace(/enter/igm,"e");
    var textoCifrado = textoCifrado.replace(/ober/igm,"o");
    var textoCifrado = textoCifrado.replace(/imes/igm,"i");
    var textoCifrado = textoCifrado.replace(/ai/igm,"a");
    var textoCifrado = textoCifrado.replace(/ufat/igm,"u");

    document.getElementById("imgMunheco").style.display = "none"; /*esto es para desaparecer la imagen*/
    document.getElementById("texto").style.display = "none"; /*esto es para desaparecer texto*/ 
    document.getElementById("texto2").innerHTML = textoCifrado; /*esto es para desaparecer texto2*/
    document.getElementById("copiar").style.display = "show"; /*esta es para copiar el texto encriptado*/
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Texto copiado!");
}