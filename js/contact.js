
( function () {


    var forms = document.querySelectorAll('.needs-validation')

    /* let array_form = Array.prototype.slice.call(forms) */
    let array_form = Array.from(forms)
    console.log(array_form);
        array_form.forEach( each => each.addEventListener('submit', event => {
                                                                        if ( each.checkValidity() ) {
                                                                            Swal.fire({ 'title': 'Sent',
                                                                                    'text': `We will contact you as soon as possible.`,
                                                                                    'icon': 'success'   });
                                                                                    validationCustom01.value=""
                                                                                    validationCustom02.value=""
                                                                                    validationCustom03.value=""
                                                                            event.preventDefault()
                                                                            event.stopPropagation()
                                                                        }else{  
                                                                                event.preventDefault()
                                                                                event.stopPropagation()
                                                                        }
                                                                
                                                                        each.classList.add('was-validated')
                                                                        }
                                                                    ,false)  ) 
                                                     
  }
) ()

