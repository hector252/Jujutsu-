const personajes = [
  {nombre: "Itadori",Descripcion: "personaje principal", enlace:""},
]
const tarjetas = document.getElementById("tarjetas")
function filtrarTarjeta (){
  personajes.forEach((personaje) => {
  const tarjeta =
  `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" ="https://www.mundodeportivo.com/alfabeta/hero/2023/10/yuji-itadori-aumento-de-poder-jujutsu-kaisen-capitulo-238-del-manga.jpg?width=768&aspect_ratio=16:9&format=nowebp">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
tarjetas.innerHTML += tarjeta
  })
}

  