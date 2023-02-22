
 /* for (const d of data.events) {  */
    data.events.forEach( d => {
    
    /* <div class="col" id="rc-col" >  */
     let divcol= document.createElement("div");
        divcol.classList.add("col");  divcol.setAttribute("id","rc-col");
    document.getElementById("row-cards").appendChild(divcol); 
    
        /* <div class="card h-100" id="rc-card" >  */
         let divrccard =document.createElement("div");   
            divrccard.classList.add( "card","h-100" );  divrccard.setAttribute("id","rc-card");
        document.getElementById("rc-col").appendChild(divrccard);
            
            /* <img src="./images/Cinema.jpg" class="card-img-top" id="card-img-top" alt="Cinema" /> */
            let imagen = document.createElement("img");
                imagen.src= `${d.image}`;  imagen.classList.add("card-img-top");
            document.getElementById("rc-card").appendChild( imagen );
            
            /* <div class="card-body" id="card-body"> */
            let divcardbody= document.createElement("div");
                divcardbody.classList.add("card-body"); divcardbody.setAttribute("id","card-body");
            document.getElementById("rc-card").appendChild( divcardbody );
            
                    /* <h5 class="card-title" id="card-title">Título</h5> */
                    let h5titulo= document.createElement("h5");   
                        h5titulo.classList.add("card-title"); h5titulo.setAttribute("id","card-title");
                        h5titulo.innerHTML = d.name;
                    document.getElementById("card-body").appendChild( h5titulo ); 

                    /* p class="card-text"> Texto descriptivo. </p> */
                    let pDescript= document.createElement("p");   
                        pDescript.classList.add("card-text"); pDescript.innerHTML = d.description;
                    document.getElementById("card-body").appendChild( pDescript ); 
            
            /* <div class="card-footer" id="card-footer"> */
            let divcardfooter= document.createElement("div");
                divcardfooter.classList.add("card-footer"); divcardfooter.setAttribute("id","card-footer");
            document.getElementById("rc-card").appendChild( divcardfooter );
                    /* <small class="text-muted">Price $0000</small> */
                    let smalltext= document.createElement("small");  
                        smalltext.classList.add("text-muted"); smalltext.setAttribute("id","text-muted");
                        smalltext.innerHTML = `Price $${d.price}`;
                    document.getElementById("card-footer").appendChild( smalltext ); 

                    /* <a  class="btn btn-primary" href="event.html" role="button">Ver más</a> */
                    let aButton = document.createElement("a"); aButton.classList.add("btn","btn-primary");
                        aButton.setAttribute("href","event.html"); aButton.innerHTML = "See more";
                    document.getElementById("card-footer").appendChild( aButton );
 });