
function validarTexto(){
  let texto = document.getElementById("texto").value;
  let validador = texto.match(/^[a-z]*$/);
  if(!validador || validador === 0){
    alert("Solo puedes ingresar letras minúsculas y sin acentos")
    location.reload();
    return true;
  }
}

function encriptador() {
    let texto = document.getElementById("texto").value.toLowerCase();

    if(!validarTexto()){
    let arrayTexto = texto.split("")
    let arrayEncriptado = []
    arrayTexto.map((letra, index) => {
      switch (letra) {
        case "e":
          arrayEncriptado[index] = "enter";
          break;
        case "i":
          arrayEncriptado[index] = "imes";
          break;
        case "a":
          arrayEncriptado[index] = "ai";
          break;
        case "o":
          arrayEncriptado[index] = "ober";
          break;
        case "u":
          arrayEncriptado[index] = "ufat";
          break;
        default:
          arrayEncriptado[index] = letra;
      }
    })
    
    let textEncriptado = arrayEncriptado.join('');
    document.getElementById("resultEncriptador").style.display = "none";
    document.getElementById("mensaje").style.display = "flex";
    document.getElementById("mensaje").innerHTML = textEncriptado;
    document.getElementById("copiar").style.display = "flex";
   }
}

  function desencriptador() {
    let texto = document.getElementById("texto").value.toLowerCase();
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");
  
    document.getElementById("resultEncriptador").style.display = "none";
    document.getElementById("mensaje").style.display = "flex";
    document.getElementById("mensaje").innerHTML = texto;
    document.getElementById("copiar").style.display = "flex";
  }

  function copiar(){
    let mensaje = document.getElementById("mensaje");
    navigator.clipboard.writeText(mensaje.firstChild.data)
    mensaje.innerHTML = "";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("resultEncriptador").style.display = "flex";
    document.getElementById("copiar").style.display = "none";
    alert("Texto Copiado");
}