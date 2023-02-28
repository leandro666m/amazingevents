var eventid = new URLSearchParams(window.location.search).get("id") - 1;


    const event_cards = document.getElementById("event-card"); //contenedor

    let divcol = document.createElement("div");  divcol.classList.add("col-md-6");
        let imagen = document.createElement("img"); imagen.src = `${data.events[eventid].image}`; imagen.classList.add("card-img-top");
  
    let divcol2 = document.createElement("div");  divcol2.classList.add("col-md-6");
        let divcardbody = document.createElement("div"); divcardbody.classList.add("card-body");
    
    let title = document.createElement("h4"); title.classList.add("card-title");  title.innerHTML = data.events[eventid].name;
    let text = document.createElement("p"); text.classList.add("card-text");  text.innerHTML = data.events[eventid].description;
  
    event_cards.appendChild(divcol);
    divcol.appendChild(imagen);

    event_cards.appendChild(divcol2);
    
    divcardbody.appendChild(title);
    divcardbody.appendChild(text);

    divcol2.appendChild(divcardbody);
    
/*
usar find
console.log( animales.filter (each => each.tipo === "terrestre") )
*/ 