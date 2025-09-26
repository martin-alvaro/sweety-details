const categorias = [
  { id: "pulseritas", archivo: "productos/pulseritas.json" },
  { id: "anillos", archivo: "productos/anillos.json" },
  { id: "aritos", archivo: "productos/aritos.json" },
  { id: "cadenas", archivo: "productos/cadenas.json" },
  { id: "cartucheras", archivo: "productos/cartucheras.json" },
  { id: "diamond", archivo: "productos/diamond.json" },
];

function cargarProductos() {
  categorias.forEach(categoria => {
    fetch(categoria.archivo)
      .then(res => res.json())
      .then(data => {
        const section = document.getElementById(categoria.id);

        const contenedor = document.createElement("div");
        contenedor.classList.add("productos");

        data.productos.forEach(prod => {
          const card = document.createElement("div");
          card.classList.add("card");

          card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <p>${prod.nombre}</p>
            <p>${prod.precio}</p>
          `;

          contenedor.appendChild(card);
        });

        section.appendChild(contenedor);
      })
      .catch(err => console.error("Error cargando " + categoria.id, err));
  });
}

document.addEventListener("DOMContentLoaded", cargarProductos);

const modal = document.getElementById("modalImagen");
const modalImg = document.getElementById("imgAmpliada");
const cerrar = document.querySelector(".cerrar");

document.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG" && e.target.closest(".card")) {
    modal.style.display = "block";
    modalImg.src = e.target.src;
  }
});

cerrar.onclick = function() {
  modal.style.display = "none";
};

modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

