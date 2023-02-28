var allEvents = [ ]


var loadCard = {
  
  all: () => { document.getElementById("row-cards").innerHTML = data.events.map( (cadaEvento) => cardTemplate(cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price)  ).join(" ") } ,
  upcoming: () => {
    data.events.map((evento) => new Date(evento.date) < new Date(data.currentDate) && allEvents.push( cardTemplate( evento._id, evento.image, evento.name, evento.description, evento.price)  )  );
    document.getElementById("row-cards").innerHTML = allEvents.join(" ");
  } , 
  past: () => {
    data.events.map((evento) => new Date(evento.date) > new Date(data.currentDate) && allEvents.push( cardTemplate( evento._id, evento.image, evento.name, evento.description, evento.price)  )  );
    document.getElementById("row-cards").innerHTML = allEvents.join(" ");
  }

  




,



};

