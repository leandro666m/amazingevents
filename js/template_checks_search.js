function template_checks_search( id_etiqueta , categorias) {
    
    categorias = categorias.map(each=> {
        return `<label> <input onclick="captureData()" class="checks" type="checkbox" name="searchfilter" id="${each}" value="${each}">  ${each} &emsp; </label>` })

    document.querySelector(id_etiqueta).innerHTML = categorias.join('')
}

template_checks_search('#checks-and-search', categorias)