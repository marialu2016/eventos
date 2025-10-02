let boton = document.getElementById("btn");
let sec1 = document.getElementById("sec1");
boton.addEventListener("click", () => {
    sec1.style.display = "block"
    boton.disabled = "true"
   });