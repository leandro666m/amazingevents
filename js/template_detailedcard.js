{/* <div class="row card cardevent bg-light p-2" id="event-card">  </div> */}
function cardTemplateEvent ( evento) {
    return ` 
    <div class="col-md-6">
        <img src="${evento.image}" class="card-img-top"/>
    </div>
  
    <div class="col-md-6 der">
        <div class="card-body-event">
            <h4 class="card-title">${evento.name}</h4>
            <small class="text-muted">${evento.date}</small>
            <p class="card-text">${evento.description}</p>
        </div>
        <div class="footer-details">
            <div class="card-footer">
                <small class="text-muted">Price $${evento.price}</small>
                <small class="text-muted">Place: ${evento.place}</small>
                <a  class="btn btn-primary" href="javascript:history.back(-1);" role="button">Back</a>
            </div>
        </div>
    </div>
  `}
  
  function printTemplateEvent(id_etiqueta, evento) {
    document.querySelector(id_etiqueta).innerHTML = cardTemplateEvent(evento)
  }
  
let evento = data.events.find( cadaEv=>cadaEv._id==new URLSearchParams(location.search).get("id") )

printTemplateEvent(`#event-card`, evento)