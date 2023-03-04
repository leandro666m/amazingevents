

function captureData() {
  let inputSearch = document.getElementById(`id_search`).value.toLowerCase()
  let checks = Array.from(document.querySelectorAll(`.checks:checked`) ).map(each => each.value)

  let filtred_events_array = data.events.filter( each =>{
            return (each.name.toLowerCase().includes(inputSearch) || 
                    each.description.toLowerCase().includes(inputSearch) || 
                    each.place.toLowerCase().includes(inputSearch) )
                && (  checks.length === 0 || 
                      checks.includes(each.category ) )             }     
          )

      filtred_events_array.length>0 ? printTemplates(filtred_events_array) : noEvent();
}
