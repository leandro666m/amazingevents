
/* <div class="row row-cols-1 row-cols-md-4 g-3 mt-5" id="row-cards" >   </div> */
function cardTemplate(evento){
    return `
    <div class="col">

        <div class="card h-100">
            <div class="card-img-container">
              <img src="${evento.image}" class="card-img-top" />
            </div>

            <div class="card-body">
              <h5 class="card-title">${evento.name}</h5> <small class="text-muted">${evento.date}</small>
              <p class="card-text"> ${evento.description} </p>
            </div>

            <div class="card-footer">
              <small class="text-muted">Price: $ ${evento.price}</small>
              <a class="btn btn-primary" onclick="swaEvent(${evento.id})" role="button">See more</a>
            </div>

        </div>

    </div>`
  }

    /* events_array es = "data.events"  ó  "filtred_events_array.length" de filters_search.js */ 
function printTemplates(events_array) {
  var body_tag_id = document.querySelector('#row-cards') || document.querySelector('#row-cards-uc') || document.querySelector('#row-cards-p');
        
        switch(body_tag_id.id) {
          case 'row-cards':
            body_tag_id.innerHTML = events_array.map( cardTemplate ).join('')
            break;
          case 'row-cards-uc':
            body_tag_id.innerHTML = events_array.map( 
              cadaEvento => (new Date(cadaEvento.date)) > (new Date(data.currentDate)) ? cardTemplate(cadaEvento) :"" ).join('')
            break;
          case 'row-cards-p':
            body_tag_id.innerHTML = events_array.map( 
              cadaEvento => (new Date(cadaEvento.date)) < (new Date(data.currentDate)) ? cardTemplate(cadaEvento) : "" ).join('')
            break;
        }

    (body_tag_id.innerHTML==="") && noEvent()
}

function noEvent(){
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

function swaEvent(ev){

  /* evento=data.events.find(e=>e._id===ev) */
  evento=data.events.find(e=>e.id===ev)

      Swal.fire({
      html: `
      <div class="row cardevent bg-light" id="event-card"> 
          <div class="col-md-6">
              <img src="${evento.image}" class="card-img-top"/>
          </div>

          <div class="col-md-6 der">
            <div class="card-body-event">
                <h2 class="card-title">${evento.name}</h2> <br>
                <small >${evento.date}</small> <br>
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

/* printTemplates(data.events) */

let URLApi = "https://mh-h0bh.onrender.com/api/amazing"
fetch(URLApi).then( resp => resp.json() ).then( datos =>  printTemplates( datos.response ) ).catch( error => console.log(` Error:  ${error}` ) )

/* 
async function importData(){
        try{
            const resp = await fetch(URLApi)
            let events = await resp.json()
//                console.log( events.response );
            printTemplates( events.response )
        }catch(error){
            console.log(` Error:  ${error}` ) 
        }
}

importData() */