import { getAllProductos } from '../services/api.js';
import '../styles/ListadoMuebles.css';

export async function ListadoMuebles() {
  const productos = await getAllProductos();

  const itemsHtml = productos.map(p => `
    <div class="producto">
    
      <img src="${p.imagen}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Precio: ${p.precio} €</p>
      <a href="#/detallemueble/${p.id}" class="btn-detalle">Ver detalle</a>
      <a href="#/borrarmueble/${p.id}" class="btn-detalle">Borrar</a>
    </div>
  `).join("");

  
  return `
    <div class="listado-container">
      <h2>Listado de Productos</h2>
      <a href="#/agregarProducto" class="btn-agregar">Añadir Producto</a>
      <div class="productos-flex">
        ${itemsHtml}
      </div>
    </div>
  `;
}