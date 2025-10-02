let root = document.getElementById("root");
let btn = document.getElementById("btn");

let sec2 = document.createElement("section");
sec2.innerHTML = `
 <section id="sec1">
        <h2>Sección 2</h2>
        <p>Lorem ipsum dolor sit amet.</p>
</section>
`
let sec1 = document.createElement("section");
sec1.innerHTML = `
 <section id="sec2">
        <h2>Sección 1</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
    </section>
    `
root.appendChild(sec1);

let mostrarSecciones = true;
function alternarSecciones(){
    if(root.firstChild){
        root.removeChild(root.firstChild)
    }
    if(mostrarSecciones){
        root.appendChild(sec2);
        btn.textContent = "Ir sección 1"
    }else{
        root.appendChild(sec1);
        btn.textContent = "Ir sección 2"
    }
    mostrarSecciones =!mostrarSecciones;
}
btn.addEventListener("click", alternarSecciones);