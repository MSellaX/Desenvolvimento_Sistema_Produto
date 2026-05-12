import { listarFavoritos } from '../../storage/Pedidos/pedidos.storage';
import criarColuna from '../../components/shared/coluna-bootstrap.component'
import criarCardPersonagem from '../../components/personagem/card.component';

export async function personagensFavoritosPage() {

    const app = document.querySelector("#app");


    app.innerHTML = `
        <h1 class="fw-bold text-primary">🛒 Pedidos </h1>
        <div class="row mt-4" id="lista-personagens"></div>
    `;

    const row = document.querySelector('#lista-personagens');
    const favoritos = listarFavoritos();

    favoritos.forEach(
        favorito => {
            const coluna = criarColuna();
            const card = criarCardPersonagem(favorito);

            const button = card.querySelector('button');

            button.addEventListener('click', () => {
                coluna.remove();
            })
            coluna.appendChild(card)
            row.appendChild(coluna)
        }
    );
}