function cardTemplateEvent ( foto, nombre, descripcion) {
    return ` 
    <div class="col-md-6">
        <img src="${foto}" class="card-img-top"/>
    </div>

    <div class="col-md-6">
        <div class="card-body">
            <h4 class="card-title">${nombre}</h4>
            <p class="card-text">${descripcion}</p>
        </div>

    </div>
    
    `}