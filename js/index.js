
let ruta = window.location.pathname;


 const rowcards =  document.getElementById("row-cards");

  
data.events.forEach( d => {
    

     let divcol= document.createElement("div");  divcol.classList.add("col");  divcol.id="rc-col";
          let divrccard =document.createElement("div");   divrccard.classList.add( "card","h-100" );  divrccard.setAttribute("id","rc-card");
            let imagen = document.createElement("img"); imagen.src= `${d.image}`;  imagen.classList.add("card-img-top");

            let divcardbody= document.createElement("div");  divcardbody.classList.add("card-body"); divcardbody.setAttribute("id","card-body");
                let title= document.createElement("h5");  title.classList.add("card-title"); title.setAttribute("id","card-title"); title.innerHTML = d.name;
                let text= document.createElement("p");  text.classList.add("card-text"); text.innerHTML = d.description;

            let divcardfooter= document.createElement("div"); divcardfooter.classList.add("card-footer"); divcardfooter.setAttribute("id","card-footer");
                let smalltext= document.createElement("small");  smalltext.classList.add("text-muted"); smalltext.setAttribute("id","text-muted");
                smalltext.innerHTML = `Price $${d.price}`;                    

                let aButton = document.createElement("a"); aButton.classList.add("btn","btn-primary"); aButton.setAttribute("href","event.html"); 
                aButton.innerHTML = "See more";
                
        divcardbody.appendChild( title ); 
        divcardbody.appendChild( text ); 
        
        divcardfooter.appendChild( smalltext ); 
        divcardfooter.appendChild( aButton );
        
        divrccard.appendChild( imagen );
        divrccard.appendChild( divcardbody );
        
        divrccard.appendChild( divcardfooter );
        divcol.appendChild(divrccard);
        
        rowcards.appendChild(divcol);
                
}  );


