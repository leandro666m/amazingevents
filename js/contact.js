// para deshabilitar el envío de formularios si hay campos no válidos
( function () {
    'use strict'
      // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
  
    // Bucle sobre ellos y evitar el envío
    let array_form = Array.prototype.slice.call(forms)
        array_form.forEach( (each) => {
            each.addEventListener('submit'
                                    , (event) => {
                                                if (!each.checkValidity()) {
                                                    event.preventDefault()
                                                    event.stopPropagation()
                                                }else{  
                                                    Swal.fire({
                                                        'title': 'Enviado',
                                                        'text': `A la brevedad nos pondremos en contacto.`,
                                                        'icon': 'success'
                                                        });
                                                        event.preventDefault()
                                                        event.stopPropagation()
                                                }
                                        
                                                each.classList.add('was-validated')
                                                }
                                    )
        } )
        
        
        
        
  }
) ()

