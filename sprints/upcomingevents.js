let contenedorHTML = document.getElementById("tarjetas")


function cardPrinter(contenedor2) {
    for (let event of events) {
        if (event.date > currentDate) {
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
}
cardPrinter(contenedorHTML)