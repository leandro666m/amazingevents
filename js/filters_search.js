
var dataToSearch

function captureData() {
  let inputSearch = document.getElementById(`search`)
  let checks = document.querySelectorAll(`.checks:checked`)

  dataToSearch = {
    [inputSearch.name]: inputSearch.value,
    [checks[0].name]: []
  }

  checks.forEach(each => dataToSearch[checks[0].name].push(each.value))
  console.log("en capturedata: "); console.log(dataToSearch);
}


let searchButton = document.getElementById(`searchButton`)
    searchButton.addEventListener(`click`, (evento) => {
      evento.preventDefault()
      captureData()
      indexFilter(dataToSearch)
    }
)

/* function indexFilter(dataToSearch){
  var array = []
   for (const elem of dataToSearch.categories) {
      array.push( data.events.map( cadaEvento => ( cadaEvento.category == elem ) ? 
           cardTemplate( cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price) : "" ).join("")
      )
   }
   document.getElementById("row-cards").innerHTML = array.join("")
 } */
 
 function indexFilter(dataToSearch){
  var array = []
   for (const elem of dataToSearch.categories) {
      array.push( 
        data.events.map(cadaEvento=>(cadaEvento.category==elem) ? cardTemplate( cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price) : "" ).join("")
      )
   }
   document.getElementById("row-cards").innerHTML = array.join("")
 }