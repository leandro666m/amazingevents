
const { createApp } = Vue

const URLApi = "https://mh.up.railway.app/api/amazing-events"

let obj_datos = 
{
    data() {
      return {
        eventos: undefined,
        date: undefined,
        categorias: undefined,
      }
    },
    beforeCreate(){ },
    created(){

      fetch(URLApi)
          .then( resp => resp.json() )
          .then( json =>{
                          this.eventos = json.events;
                          this.date = json.currentDate.slice(0,10); 
                          this.categorias = [... new Set( json.events.map(each => each.category))]
                        } )
          .catch( error => console.log(` Error:  ${error}` ) ) 

     },
    mounted(){


     },
    methods: {
      /* printTemplates( data ){},
      checksTemplate(){} */
    
      
    },
}
 createApp(obj_datos).mount('#app')


  function captureData() {
    let inputSearch = document.getElementById(`id_search`).value.toLowerCase()
    let checks = Array.from(document.querySelectorAll(`.checks:checked`) ).map(each => each.value) 
    /* let checks = [...new Set( (document.querySelectorAll(`.checks:checked`) ).map(each => each.value) ) ] */

    let filtred_events_array = obj_datos.data.eventos.filter( each =>{
              return (each.name.toLowerCase().includes(inputSearch) || 
                      each.description.toLowerCase().includes(inputSearch) || 
                      each.place.toLowerCase().includes(inputSearch) )
                  && (  checks.length === 0 || 
                        checks.includes(each.category ) )             }     
            )
  
        filtred_events_array.length>0 ? printTemplates(filtred_events_array) : noEventsFound();
  }
              
  
  