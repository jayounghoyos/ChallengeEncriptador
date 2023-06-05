const loader = document.querySelector(".loader");

// Ocultar el loader después de 3 segundos
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 4000);
});

// Función para encriptar el texto
function encriptar() {
  var mensajeEncriptar = document
    .getElementById("mensaje_encriptar")
    .value.toLowerCase();
  var mensajeEncriptado = "";

  for (var i = 0; i < mensajeEncriptar.length; i++) {
    var letra = mensajeEncriptar.charAt(i);
    switch (letra) {
      case "a":
        mensajeEncriptado += "avocado";
        break;
      case "b":
        mensajeEncriptado += "tinto";
        break;
      case "c":
        mensajeEncriptado += "grid";
        break;
      case "d":
        mensajeEncriptado += "fruit";
        break;
      case "e":
        mensajeEncriptado += "not";
        break;
      // ... Agrega los casos para las demás letras
      default:
        mensajeEncriptado += letra;
        break;
    }
  }
  document.getElementById("mensaje").value = mensajeEncriptado;
  console.log(mensajeEncriptado);
  const slide3 = document.querySelector("#Slide3");
  slide3.checked = true;
}

// Función para desencriptar el texto
function desencriptar() {
  var mensajeDesencriptar = document
    .getElementById("mensaje")
    .value.toLowerCase();
  var mensajeDesencriptado = "";

  while (mensajeDesencriptar.length > 0) {
    if (mensajeDesencriptar.startsWith("avocado")) {
      mensajeDesencriptado += "a";
      mensajeDesencriptar = mensajeDesencriptar.substring(7);
    } else if (mensajeDesencriptar.startsWith("tinto")) {
      mensajeDesencriptado += "b";
      mensajeDesencriptar = mensajeDesencriptar.substring(6);
    } else if (mensajeDesencriptar.startsWith("grid")) {
      mensajeDesencriptado += "c";
      mensajeDesencriptar = mensajeDesencriptar.substring(6);
    } else if (mensajeDesencriptar.startsWith("fruit")) {
      mensajeDesencriptado += "d";
      mensajeDesencriptar = mensajeDesencriptar.substring(11);
    } else if (mensajeDesencriptar.startsWith("not")) {
      mensajeDesencriptado += "e";
      mensajeDesencriptar = mensajeDesencriptar.substring(9);
    }
    // ... Agrega los casos para las demás palabras de reemplazo
    else {
      mensajeDesencriptado += mensajeDesencriptar.charAt(0);
      mensajeDesencriptar = mensajeDesencriptar.substring(1);
    }
  }

  document.getElementById("mensaje").value = mensajeDesencriptado;
  console.log(mensajeDesencriptado);
  const slide3 = document.querySelector("#Slide3");
  slide3.checked = true;
}

// Función para copiar el texto
function copiar() {
  var mensajeDesencriptado = document.getElementById("mensaje").value;
  navigator.clipboard.writeText(mensajeDesencriptado).then(
    function () {
      alert("Texto copiado al portapapeles");
    },
    function () {
      alert("No se pudo copiar el texto");
    }
  );
}