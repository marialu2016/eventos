let root = document.getElementById("root");
let btn = document.getElementById("btn");
let sec2 = document.createElement("section")
sec2.innerHTML = `
  <section id="sec2">
        <h2>Sección 2</h2>
        <p>Lorem ipsum dolor sit amet.</p>
  </section>
`
let sec1 = document.createElement("section");
sec1.innerHTML = `
  <section id="sec1">
        <h2>Sección 1</h2>
        <p>Lorem ipsum dolor sit amet.</p>
  </section>
`
root.appendChild(sec1);
let mostrarSeccion = true;
function alternarSeccion(){
    if(root.firstChild){
        root.removeChild(root.firstChild)
    }
    if (mostrarSeccion){
        root.appendChild(sec1)
        btn.textContent = "Ir Sección 2"
        mostrarSeccion = false;
    }else{
        root.appendChild(sec2);
        btn.textContent = "Ir Sección 1";
        mostrarSeccion = true;
    }
}
btn.addEventListener("click", alternarSeccion);
