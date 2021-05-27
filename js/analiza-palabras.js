/* Crea tu función aquí */
function analizaPalabras(palabras) {
  let analisis;
  for (const i in palabras) {
    analisis += "#######";
    analisis += `\nPalabra {i}: ${palabras[i]}`;
    analisis += `\nNº de caacteres: ${longitud(palabras[i])}`;
    analisis += `\nDeletreo ${deletreo(palabras[i])}`;
    analisis += parMayus(palabras[i]);
    if (ble(palabras[i])) {
      analisis += `\nLa palaba sí contiene "ble"`;
    } else {
      analisis += `\nLa palaba no contiene "ble"`;
    }
    analisis += "\n#######\n";
  }
  return analisis;
}

function longitud(palabra) {
  return palabra.length;
}
function deletreo(palabra) {
  return palabra.split("").join("-");
}
function parMayus(palabra) {
  let par = "";
  let mayus = "";
  if (palabra.length % 2 === 0) {
    par = "par";
  } else {
    par = "impar";
  }
  if (palabra[0] === palabra[0].toUpperCase) {
    mayus = "empieza";
  } else {
    mayus = "no empieza";
  }
  return `La palabra es ${par} y ${mayus} por mayúscula`;
}
function ble(palabra) {
  if (palabra.includes("ble")) {
    return true;
  } else {
    return false;
  }
}
