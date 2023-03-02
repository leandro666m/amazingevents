function cardTemplateEvent ( foto, nombre, descripcion, fecha, precio, lugar) {
    return ` 
    <div class="col-md-6">
        <img src="${foto}" class="card-img-top"/>
    </div>

    <div class="col-md-6">
        <div class="card-body-event">
            <h4 class="card-title">${nombre}</h4>
            <small class="text-muted">${fecha}</small>
            <p class="card-text">${descripcion}</p>
        </div>
        <div class="footer-details">
            <div class="card-footer">
                <small class="text-muted">Price $${precio}</small>
                <small class="text-muted">Place: ${lugar}</small>
            </div>
        </div>

    </div>
    
    `}