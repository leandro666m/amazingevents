
let eventoId = data.events.find( cadaEvento => cadaEvento._id ===  new URLSearchParams(window.location.search).get("id")-1 )

document.getElementById("event-card").innerHTML = cardTemplateEvent( eventoId.image, eventoId.name, eventoId.description, eventoId.date, eventoId.price, eventoId.place)