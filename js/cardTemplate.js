var cardTemplate = (id, foto, nombre, descripcion, precio, fecha) =>{
    return `<div class="col">
        <div class="card h-100">
        <div class="card-img-container">
          <img src="${foto}" class="card-img-top" />
        </div>
          <div class="card-body">
            <h5 class="card-title">${nombre}</h5> <small class="text-muted">${fecha}</small>
            <p class="card-text"> ${descripcion} </p>
          </div>

          <div class="card-footer">
            <small class="text-muted">Price: $ ${precio}</small>
            <a  class="btn btn-primary" href="event.html?id=${id}" role="button">See more</a>
          </div>
        </div>
      </div>
    </div>`}