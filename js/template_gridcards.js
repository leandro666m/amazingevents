
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
              <a  class="btn btn-primary" href="event.html?id=${evento._id}" role="button">See more</a>
            </div>

        </div>

    </div>`}

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

printTemplates(data.events)

function noEvent(){
  var body_tag_id = document.querySelector('#row-cards') || document.querySelector('#row-cards-uc') || document.querySelector('#row-cards-p');
  body_tag_id.className ="row card cardevent bg-light p-2"
  body_tag_id.innerHTML = `
  
            <div class="col-md-6">
              <img src="./images/no_result.png" class="card-img-notfound"/>
            </div>
              
            <div class="col-md-6 der ">
                <div class="card-body-event">
                    <h4 class="card-title">No events found</h4>
                    <p class="card-text"> Try another search!</p>
                </div>
                <div class="footer-details">
                    <div class="card-footer">
                      <a  class="btn btn-primary" href="javascript:history.back(-1);" role="button">Back</a>
                    </div>
                </div>
            </div>
  
            `
}