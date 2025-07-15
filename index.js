const navCont = document.querySelector("#navContainer");
const navButton = navCont.querySelectorAll("nav button");

navButton.forEach(boton => {
    boton.addEventListener("click", () => {
        navButton.forEach(b => b.classList.remove("marcado"));
        boton.classList.add("marcado");
    });
});

// 
const btnOcultar = document.querySelector("#btn-ocultar");

btnOcultar.addEventListener("click", () => {
    const estado = btnOcultar.classList.toggle("oculto");
    if(estado){
        navCont.style.width = "fit-content";
        navCont.style.minWidth = "0px";
        navCont.querySelector("#navDesaparece").style.display = "none";
        btnOcultar.style.backgroundImage = "url(heroicons-master/optimized/24/outline/arrow-long-right.svg)";
    }else{
        navCont.querySelector("#navDesaparece").style.display = "block";
        navCont.style.width = "25%";
        navCont.style.minWidth = "300px";
        btnOcultar.style.backgroundImage = "url(heroicons-master/optimized/24/outline/arrow-long-left.svg)";
    }
});


/* Select */
const select = document.querySelector(".select");
select.addEventListener("focus", () => {
    select.classList.remove("inactivo");
    select.classList.add("activo");
    select.querySelector(".lista-select").style.display = "flex";
});
document.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    select.querySelector(".lista-select").style.display = "none";
    if(select.querySelector("p").textContent == ""){
        select.classList.remove("activo");
        select.classList.add("inactivo");
    }
  }
});

const opciones = select.querySelectorAll(".lista-select > *");
opciones.forEach(opcion => {
    opcion.addEventListener("click", () =>{
        select.querySelector("p").innerHTML = opcion.textContent;
    })
});
