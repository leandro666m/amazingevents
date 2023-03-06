
//document.querySelector('#btn-submit').addEventListener('click', obtenerDatos())

function obtenerDatos(){
    let error = validar();
    if (error) {
        Swal.fire({
            'title': 'Sus datos no se pudieron enviar',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        Swal.fire({
            'title': 'Enviado',
            'text': `A la brevedad nos pondremos en contacto.`,
            'icon': 'success'
            }).then(() => limpiar() );
    };

}
function validar(){
let inputs_requeridos = document.querySelectorAll('#frm-control [required]');
let error = true;
for (let i = 0; i < inputs_requeridos.length; i++) {
    if (inputs_requeridos[i].value == '') {
        inputs_requeridos[i].classList.add('input-error');
        error = false;
    } else {
        inputs_requeridos[i].classList.remove('input-error');
    }
}

return error;
}
function limpiar(){
    form4Example1.value="";
    form4Example2.value="";
    form4Example3.value="";
}