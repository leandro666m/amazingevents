


var allEvents = [ ]
var cardTemplate = (id, foto, nombre, descripcion, precio) =>{
    return `<div class="col">
        <div class="card h-100">
        <div class="card-img-container">
          <img src="${foto}" class="card-img-top" />
        </div>
          <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text"> ${descripcion} </p>
          </div>

          <div class="card-footer">
            <small class="text-muted">"Price: $ ${precio}"</small>
            <a  class="btn btn-primary" href="event.html?id=${id}" role="button">See more</a>
          </div>
        </div>
      </div>
    </div>`}

var loadCard = {
  
  all: () => {
    console.log("default");
    data.events.forEach((evento) => {
      allEvents.push(
        cardTemplate( evento._id, evento.image, evento.name, evento.description, evento.price)  );
    }  );
    document.getElementById("row-cards").innerHTML = allEvents.join(" ");
  }
  ,
  upcoming: () => {
    data.events.forEach((evento) => {
      new Date(evento.date) < new Date(data.currentDate) && allEvents.push( 
        cardTemplate( evento._id, evento.image, evento.name, evento.description, evento.price)  );
    }  );
    document.getElementById("row-cards").innerHTML = allEvents.join(" ");
  }
  ,
  past: () => {
    data.events.forEach((evento) => {
      new Date(evento.date) > new Date(data.currentDate) && allEvents.push( 
        cardTemplate( evento._id, evento.image, evento.name, evento.description, evento.price)  );
    }  );
    document.getElementById("row-cards").innerHTML = allEvents.join(" ");
  }
  ,
};






/*------------------------------------------------------------*/
/* 
var loadCard = {
    upcoming: () => data.events.forEach( (event) => { (new Date(event.date) < new Date(data.currentDate)) && createGridCard(event)  } ),
    past: () => data.events.forEach( (event) => {  (new Date(event.date) > new Date(data.currentDate)) && createGridCard(event) }  ),
    default: () => data.events.forEach( (event) => { createGridCard(event) } ),
};     */
/*
function createGridCard(event) {
    const rowcards = document.getElementById("row-cards"); //contenedor

    let divcol = document.createElement("div");
        divcol.classList.add("col");
    
    let divrccard = document.createElement("div");
        divrccard.classList.add("card", "h-100");
    
    let imagen = document.createElement("img");
        imagen.src = `${event.image}`;
        imagen.classList.add("card-img-top");
  
    let divcardbody = document.createElement("div");
        divcardbody.classList.add("card-body");
    
    let title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerHTML = event.name;
    let text = document.createElement("p");
        text.classList.add("card-text");
        text.innerHTML = event.description;
  
    let divcardfooter = document.createElement("div");
        divcardfooter.classList.add("card-footer");
    
    let smalltext = document.createElement("small");
        smalltext.classList.add("text-muted");
        smalltext.innerHTML = `Price $${event.price}`;
  
    var aButton = document.createElement("a");
        aButton.classList.add("btn", "btn-primary");
        aButton.setAttribute("href", `event.html?id=${event._id-1}`);
        aButton.innerHTML = "See more";

    divcardbody.appendChild(title);
    divcardbody.appendChild(text);
  
    divcardfooter.appendChild(smalltext);
    divcardfooter.appendChild(aButton);
  
    divrccard.appendChild(imagen);
    divrccard.appendChild(divcardbody);
  
    divrccard.appendChild(divcardfooter);
    divcol.appendChild(divrccard);
  
    rowcards.appendChild(divcol);
}
*/
