function template_checks_search( id_etiqueta , categorias) {
    
    categorias = categorias.map(each=> {
        return `<label> <input onclick="captureData()" class="checks" type="checkbox" name="searchfilter" id="${each}" value="${each}">  ${each} &emsp; </label>` })

    document.querySelector(id_etiqueta).innerHTML = categorias.join('')
}


let categorias = [] //array de categorias de eventos SIN repetirse
data.events.forEach( each => { !categorias.includes(each.category) && categorias.push(each.category) } )

template_checks_search('#checks-and-search', categorias)