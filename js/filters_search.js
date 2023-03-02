
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

if( document.getElementById(`searchBtn`) ){
  let searchButton = document.getElementById(`searchBtn`)
      searchButton.addEventListener(`click`, (evento) => {
        evento.preventDefault()
        captureData()
        indexFilter(dataToSearch)
        }
      )
}else if (document.getElementById(`upCSearchBtn`) ) {
  let upCSearchButton = document.getElementById(`upCSearchBtn`)
  upCSearchButton.addEventListener(`click`, (evento) => {
    evento.preventDefault()
    captureData()
    upcomingFilter(dataToSearch)
  }
)
} else {
  let pastCSearchButton = document.getElementById(`pastCSearchBtn`)
  pastCSearchButton.addEventListener(`click`, (evento) => {
    evento.preventDefault()
    captureData()
    pastFilter(dataToSearch)
  }
  )
} ;


  /* let searchButton = document.getElementById(`searchBtn`)
      searchButton.addEventListener(`click`, (evento) => {
        evento.preventDefault()
        captureData()
        indexFilter(dataToSearch)
      }
  ) */

 /*  let upCSearchButton = document.getElementById(`upCSearchBtn`)
  upCSearchButton.addEventListener(`click`, (evento) => {
    evento.preventDefault()
    captureData()
    upcomingFilter(dataToSearch)
  }
) */

function indexFilter(dataToSearch){
  var array = []
   for (const elem of dataToSearch.categories) {
      array.push( data.events.map( cadaEvento => ( cadaEvento.category == elem ) ? 
           cardTemplate( cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price) : "" ).join("")
      )
   }
   document.getElementById("row-cards").innerHTML = array.join("")
 }
 

 function upcomingFilter(dataToSearch){
  var array = []
   for (const elem of dataToSearch.categories) {
      array.push( 
        data.events.map(cadaEvento=>(cadaEvento.category==elem) ? 
          cardTemplate( cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price) : "" ).join("")
      )
   }
   document.getElementById("row-cards").innerHTML = array.join("")
 }


 function pastFilter(dataToSearch){
  var array = []
   for (const elem of dataToSearch.categories) {
      array.push( 
        data.events.map(cadaEvento=>(cadaEvento.category==elem) ? 
          cardTemplate( cadaEvento._id, cadaEvento.image, cadaEvento.name, cadaEvento.description, cadaEvento.price) : "" ).join("")
      )
   }
   document.getElementById("row-cards").innerHTML = array.join("")
 }