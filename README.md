# Preentrega React

Este documento recopila el código desarrollado a lo largo del proyecto de una página web de tienda online utilizando React + Vite + Bootstrap.

Incluye:

- Estructura de componentes

- Funcionalidades (carrito, persistencia, promociones).

- Mejoras estéticas (navbar centrado, listón promocional, efectos 3D).

- Se usa localStorage para persistir carrito e imágenes.

- Los productos promocionales tienen discountedPrice y isPromo: true.

- El badge (listón diagonal) solo aparece si product.isPromo es verdadero.

- El botón de agregar al carrito cambia de color/texto y se deshabilita al agregar.

- Se agregó overflow: hidden en .card para que el listón no sobresalga.

- Las cards tienen sombra y elevación con box-shadow y transform.

- Navbar centrado con mx-auto y espaciado extra con me-4.

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

🖥️ Proyecto completo y listo para uso o despliegue.

## Estructura del proyecto

```
📁src/
├── App.jsx
├── main.jsx
├── index.css
├── 📁styles/
│   └── style.css
├── 📁data/
│   ├── products.js
│   └── promotions.js
└── 📁components/
    ├── Header.jsx
    ├── ProductCard.jsx
    ├── ProductList.jsx
    ├── Cart.jsx
    └── Footer.jsx
```
