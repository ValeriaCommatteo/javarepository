const contenedorTarjetas = document.querySelector('#past_list')

let tarjetas = ''

for (const data of eventos)  {
    tarjetas += `<div class="card" style="width: 18rem;" >
    <img src="./assets/Marathon.jpg" class="card-img-top w-100 h-60" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.events.name}</h5>
      <p class="card-text">${data.events.description}</p>
      <p class="card-text">${data.events.category}</p>
      <p class="card-text">${data.events.place}</p>
        <p class="p-3">${data.events.capacity}</p>
        <p class="card-text">${data.events.assistance}</p>
        <p class="card-text">${data.events.price}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
}

contenedorTarjetas.innerHTML = tarjetas