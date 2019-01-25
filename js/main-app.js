/*----- Modal -----*/
/**
 * Constante modal = {}
 * contiene todos los identificadores necesarios para el funcionamiento del modal
 * 
 * modal.id = tipo Selector. 
 * contiene el identificador por Id para el modal, para interactuar con las propierdades del mismo.
 * 
 * modal.toggle = [tipo Selector]. 
 * contiene el identificador por selector '.modal-toggle', para interactuar con los botones de abrir y cerrar el modal.
**/

const modal = {
  id: 
    document.getElementById('modal'),
  toggle: 
    document.querySelectorAll('.modal-toggle')  
    // querySelectorAll, es para indentificar todos los elementos del DOM con la clase '.modal-toggle'.
};


modal.toggle.forEach(btn => {
  if (btn === null || btn === undefined) return;
  // si btn es null || undefined, entonces se cancela la funcion.

  btn.addEventListener('click', toggle);
});

// toggle funcion para aplicar la clase open al modal.
function toggle(e) {
  modal.id.classList.toggle('open');
  // toggle es una funcion que permite agregar una clase ó quitarla si ya esta agregada.
}