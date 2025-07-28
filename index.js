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
        navCont.querySelector("#navDesaparece").style.display = "none";
        btnOcultar.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke-width=\'1.5\' stroke=\'black\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3\'/%3E%3C/svg%3E")';
    }else{
        navCont.querySelector("#navDesaparece").style.display = "block";
        btnOcultar.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke-width=\'1.5\' stroke=\'black\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M6.75 15.75L3 12m0 0L6.75 8.25M3 12h18\'/%3E%3C/svg%3E")';
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
