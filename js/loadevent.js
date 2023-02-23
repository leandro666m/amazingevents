function createEventCard(eventid) {
    const event_cards = document.getElementById("event-card"); //contenedor

    let divcol = document.createElement("div");  divcol.classList.add("col-md-6");
        let imagen = document.createElement("img"); imagen.src = `${eventid.image}`; imagen.classList.add("card-img-top");
  
    let divcol2 = document.createElement("div");  divcol2.classList.add("col-md-6");
        let divcardbody = document.createElement("div"); divcardbody.classList.add("card-body");
    
    let title = document.createElement("h4"); title.classList.add("card-title");  title.innerHTML = eventid.name;
    let text = document.createElement("p"); text.classList.add("card-text");  text.innerHTML = eventid.description;
  
    divcardbody.appendChild(title);
    divcardbody.appendChild(text);

    divcol.appendChild(imagen);
    divcol2.appendChild(divcardbody);

    event_cards.appendChild(divcol2);
    event_cards.appendChild(divcol);
}