function index(){
  document.getElementById("row-cards").innerHTML = data.events.map( (cadaEvento) => cardTemplate(cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price)  ).join(" ") 
} 

function upcoming() {
    document.getElementById("row-cards").innerHTML = data.events.map( 
      cadaEvento => (new Date(cadaEvento.date)) < (new Date(data.currentDate)) ? cardTemplate( cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price, cadaEvento.date) : "" ).join("") 
  }
    
  function past() {
    document.getElementById("row-cards").innerHTML =  data.events.map( 
      cadaEvento => (new Date(cadaEvento.date)) > (new Date(data.currentDate)) ? cardTemplate( cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price, cadaEvento.date) : "" ).join("") 
  }



