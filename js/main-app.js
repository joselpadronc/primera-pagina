/*----- Modal -----*/
let ventana = document.getElementById('modal');
let open = document.getElementById('abrir');
let close = document.getElementById('cerrar');

open.addEventListener('click', function () {
  ventana.styles.display = 'block';
});