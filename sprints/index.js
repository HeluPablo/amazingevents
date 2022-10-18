let contenedorHTML = document.getElementById("tarjetas")


function cardPrinter(contenedor2) {
    for (let event of events) {
        contenedor2.innerHTML +=
            `
                 <div class="card align-items-center pb-2" style="width: 18rem;">
                 <img src= "${event.image}" class="card-img-top" alt="${event.name}">
                 <div class="card-body">
                 <h5 class="card-title">${event.category}</h5>
                 <p class="card-text">${event.description}</p>
                  </div>
                <p>Price: ${event.price}</p>
                <a href="./details.html" class="btn btn-primary">Show me more</a>
                </div>
         `
    }
}
cardPrinter(contenedorHTML)

events.forEach(function (element) {
    document.getElementById("checkbox-cont")
    element.category
    let contenedor = document.getElementById("checkbox-cont")
    checkboxPrinter(contenedor)
})

function checkboxPrinter(contenedor) {
    for (let element of categoria) {
        contenedor.innerHTML +=
            ` <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">Category</label>
        </div>
         `
    }
}