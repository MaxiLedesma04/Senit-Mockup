/******************************menu hambueguesa abrir y cerrar*************************************************/
const menuHamburguesa = document.getElementById("mobile-menu");
const botonHamburguesa = document.getElementById("hamburger");
const botonMenuCerrar = document.getElementById("boton-menu-cerrar");

botonHamburguesa.addEventListener("click", () => {
  menuHamburguesa.classList.toggle("hidden");
});

botonMenuCerrar.addEventListener("click", () => {
  menuHamburguesa.classList.add("hidden");
});
