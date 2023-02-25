/*  function loadCard(pagina) {
  data.events.forEach((event) => {
        if (pagina === 3) {
        //past
                if (new Date(event.date) < new Date(data.currentDate)) {
                    createGridCard(event);
                }
        } else if (pagina === 2) {
        //upcoming
                if (new Date(event.date) > new Date(data.currentDate)) {
                    createGridCard(event);
                }
        } else if (pagina === 1) {
        //home
                createGridCard(event);
        }
  });
}  */


var loadCard = {
    /* upcoming: () => data.events.forEach( (event) => { if (new Date(event.date) < new Date(data.currentDate)) { createGridCard(event) } } ), */
    upcoming: () => data.events.forEach( (event) => { (new Date(event.date) < new Date(data.currentDate)) && createGridCard(event)  } ),
    past: () => data.events.forEach( (event) => {  (new Date(event.date) > new Date(data.currentDate)) && createGridCard(event) }  ),
    default: () => data.events.forEach( (event) => { createGridCard(event) } ),
};    /* ( loadCard[1] || loadCard.default) (); */

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
        /* aButton.addEventListener('click', () => {
            const id = event.id;  
            alert("id: " + event.id)
             const url = `../event.html?id=${id}`;
            window.location.href = url; 
          }); */

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


  /* 
let template = (foto, nombre, descripcion, precio) =>{
    return `
    
    `
};

function printUpcomingEvents(){

    let events = data.events;
    let currentDate = data.currentDate;
    let template = [];

    for (let element of events) {
if( element.date > currentDate){

        template.push( template(element.image, element.name, element.description, element.price))
        const element = array[element];
        
    }
}
let tarjeta = document.getElementById("upcomingEvents");
tarjeta.innerHTML = template.join("");

}

printUpcomingEvents() */