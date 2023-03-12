
 

function cardTemplate(evento){
    return `
    <div class="col">

        <div class="card h-100">
            <div class="card-img-container">
              <img src="${evento.image}" class="card-img-top" />
            </div>

            <div class="card-body">
              <h5 class="card-title">${evento.name}</h5> <small class="text-muted">${evento.date.slice(0,10)}</small>
              <p class="card-text"> ${evento.description} </p>
            </div>

            <div class="card-footer">
              <small class="text-muted">Price: $ ${evento.price}</small>
              <a class="btn btn-primary" onclick="swaEventDetail('${evento.id}')" role="button">See more</a>
            </div>

        </div>

    </div>`
}

function noEventsFound(){
    Swal.fire({
     html: `
     <div class="row cardevent bg-light" id="event-card"> 
           <div class="col-md-6">
           <img src="./images/no_result.png" class="card-img-notfound"/>
         </div>
           
         <div class="col-md-6 der ">
             <div class="card-body-event">
                 <h4 class="card-title">No events found</h4>
                 <p class="card-text"> Try another search!</p>
             </div>
         </div>
     </div>
     `,
     showCloseButton: false,
     confirmButtonText: 'Back',
     width: '50%',
     //grow: 'row',
     padding: '1rem',
     scrollbarPadding: false,
     color: '#716add',
     backdrop: 'rgba(247,0,18,0.38)',
   })

}

function printTemplates(events_array) {
  var body_tag_id = document.querySelector('#row-cards') || document.querySelector('#row-cards-uc') || document.querySelector('#row-cards-p') ;
        
        switch(body_tag_id.id) {
          case 'row-cards':
            body_tag_id.innerHTML = events_array.map( cardTemplate ).join('')
            break;
          case 'row-cards-uc':
            body_tag_id.innerHTML = events_array.map( 
              eachEvent => (eachEvent.date).slice(0,10) > date ? cardTemplate(eachEvent) :"" ).join('')
            break;
          case 'row-cards-p':
            body_tag_id.innerHTML = events_array.map( 
              eachEvent => (eachEvent.date).slice(0,10) < date ? cardTemplate(eachEvent) : "" ).join('')
            break;
        }

    (body_tag_id.innerHTML==="") && noEventsFound()
}

function swaEventDetail(eventoID){

  let evento=data.find(e=>e.id===eventoID)
  
                Swal.fire({
              html: `
              <div class="row cardevent bg-light" id="event-card"> 
                  <div class="col-md-6">
                      <img src="${evento.image}" class="card-img-top"/>
                  </div>
        
                  <div class="col-md-6 der">
                    <div class="card-body-event">
                        <h2 class="card-title">${evento.name}</h2> <br>
                        <small >${evento.date.slice(0,10)}</small> <br>
                        <p class="card-text">${evento.description}</p>
                    </div>
                    <div class="footer-details">
                        <div class="card-footer">
                            <small>Price $${evento.price}</small>
                            <small>Place: ${evento.place}</small>
                        </div>
                    </div>
                  </div>
        
              </div>
              `,
              showCloseButton: false,
              confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
              width: '70%',
              //grow: 'row',
              padding: '1rem',
              scrollbarPadding: false,
              color: '#716add',
              backdrop: 'rgba(0,30,100,0.76)',
                  })
}


function captureData() {
  let inputSearch = document.getElementById(`id_search`).value.toLowerCase()
  let checks = Array.from(document.querySelectorAll(`.checks:checked`) ).map(each => each.value)

  let filtred_events_array = data.filter( each =>{
            return (each.name.toLowerCase().includes(inputSearch) || 
                    each.description.toLowerCase().includes(inputSearch) || 
                    each.place.toLowerCase().includes(inputSearch) )
                && (  checks.length === 0 || 
                      checks.includes(each.category ) )             }     
          )

      filtred_events_array.length>0 ? printTemplates(filtred_events_array) : noEventsFound();
}

function checksTemplate( ) {
  let categorias = [] //array de categorias de eventos SIN repetirse

  data.forEach( each => { !categorias.includes(each.category) && categorias.push(each.category) } )

  categorias = categorias.map(each=> 
       `<label> <input onclick="captureData()" class="checks" type="checkbox" name="searchfilter" id="${each}" value="${each}">  ${each} &emsp; </label>` )

  document.querySelector('#checks-and-search').innerHTML = categorias.join('')
  
}


/*---------------------- CONECTION ----------------------*/
let URLApi = "https://mh.up.railway.app/api/amazing-events"

let data
let date 
(async function getData(){
  await fetch(URLApi)
    .then( resp => resp.json() )
    .then( json =>  {
                      data = json.events;
                      date = json.currentDate.slice(0,10); 
                    }
            ) 
          
  printTemplates( data )
  checksTemplate()
})()


              /* fetch(URLApi)
            .then( resp => resp.json() )
            .then( datos =>  printTemplates( datos.response ) )
              .catch( error => console.log(` Error:  ${error}` ) ) 
             
async function importData(){
        try{
            const resp = await fetch(URLApi)
            let events = await resp.json()
                console.log( events.response );
            printTemplates( events.response )

        }catch(error){
            console.log(` Error:  ${error}` ) 
        }
}

importData()
*/