var loadCard = {
  
  all: () => { document.getElementById("row-cards").innerHTML = data.events.map( (cadaEvento) => cardTemplate(cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price)  ).join(" ") } ,
  
  upcoming: () => {
    document.getElementById("row-cards").innerHTML = data.events.map( 
      cadaEvento => (new Date(cadaEvento.date)) < (new Date(data.currentDate)) ? cardTemplate( cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price) : "" ).join("") 
  }
   , 
  past: () => {
    document.getElementById("row-cards").innerHTML =  data.events.map( 
      cadaEvento => (new Date(cadaEvento.date)) > (new Date(data.currentDate)) ? cardTemplate( cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price) : "" ).join("") 
  }
}

function all(){
  loadCard.all()
} 

function indexFilter(dataToSearch){
  console.log(" function all(dataToSearch){ ");  console.log( dataToSearch.categories );

/*   document.getElementById("row-cards").innerHTML = data.events.map( 
            cadaEvento => ( cadaEvento.category == dataToSearch.categories ) ? cardTemplate(cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price) :"" 
        ).join(" ")  
} */


/* document.getElementById("row-cards").innerHTML = 
  (data.events.filter( evento => evento.category==dataToSearch.categories ) )
  .map( each => cardTemplate(each._id, each.image, each.name, each.description, each.price)).join(" ")  
 */

  dataToSearch.categories.forEach(element => {
    console.log( element);
    data.events.forEach( ev =>  )

  });
  
    
  
 
}

