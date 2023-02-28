/*  usar filter  */


document.getElementById("row-cards").innerHTML = data.events.filter( 
  (cadaEvento) => 
  cadaEvento.category==="Museum" &&
    cardTemplate(cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price)
  
).join("")

/*
upcoming: () => {
    data.events.forEach( evento =>  evento.category==="Museum" &&   allEvents.push( cardTemplate( evento._id, evento.image, evento.name, evento.description, evento.price) )  )
    document.getElementById("row-cards").innerHTML = allEvents.join(" ")
  } ,
*/

/* all: () => { document.getElementById("row-cards").innerHTML = data.events.map( (cadaEvento) => cardTemplate(cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price)  ).join(" ") } , */