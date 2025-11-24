import { Home } from './views/Home';
import { AboutUs } from './views/AboutUs';
import { NotFound } from './views/NotFound';
import { ListadoMuebles } from './components/ListadoMuebles';

export function router() {
const view = document.getElementById('view');
const route = location.hash.slice(1).toLowerCase() || '/';
const routes = {
    '/': Home,
    '/listadomuebles': ListadoMuebles,
    '/about': AboutUs
};
const screen = routes[route] || NotFound;
view.innerHTML = screen();
}