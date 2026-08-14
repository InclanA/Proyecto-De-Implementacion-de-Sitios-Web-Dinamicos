const leer = () => JSON.parse(localStorage.getItem('carro') || '[]');
const guardar = c => localStorage.setItem('carro', JSON.stringify(c));
const actualizar = () => {
const el = document.getElementById('cart-count');
    if (el) {
        el.textContent = leer().length;
    }
};

const agregar = p => {
    const c = leer();
    c.push(p);
    guardar(c);
    actualizar();
    alert('Agregado al carrito');
};
document.addEventListener('click', (e) => {
    const boton = e.target.closest('.agregar-carrito');
    if (boton) {
        e.stopPropagation();

        const art = boton.closest('.producto');

        agregar({
            nombre: art.dataset.nombre,
            precio: art.dataset.precio,
            img: art.dataset.img
        });

        return;
    }
    const art = e.target.closest('.producto');

    if (art) {
        const q = new URLSearchParams({
            nombre: art.dataset.nombre,
            precio: art.dataset.precio,
            img: art.dataset.img
        });
        window.location.href = 'index.html?' + q.toString();
    }
});
document.addEventListener('DOMContentLoaded', actualizar);