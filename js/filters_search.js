
var dataToSearch

function captureData(){
  let inputSearch = document.getElementById(`search`)
  let checks = document.querySelectorAll(`.checks:checked`)
  
  dataToSearch = {
    [inputSearch.name] : inputSearch.value,
    [checks[0].name]: []
  }  

  checks.forEach( each => dataToSearch[checks[0].name].push(each.value) )
        console.log("en capturedata: "); console.log( dataToSearch );
  }


let searchButton = document.getElementById(`searchButton`)
    searchButton.addEventListener(`click`, (evento) => {
      evento.preventDefault()
      captureData()    
      indexFilter( dataToSearch)
    }
    )
