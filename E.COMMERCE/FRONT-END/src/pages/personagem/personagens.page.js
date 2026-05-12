import {buscarPersonagens} from '../../services/personagem/personagem.api';
import criarColuna from '../../components/shared/coluna-bootstrap.component';
import criarCardPersonagem from '../../components/personagem/card.component';

export async function personagensPage() {
    const app = document.querySelector("#app");

    app.innerHTML = `
        <h1 class="fw-bold text-primary">🧙‍♂️ Personagens </h1>
        <div class="row mt-4" id="lista-personagens"></div>
    `;

    const row = document.querySelector("#lista-personagens");

    const personagens = await buscarPersonagens();

    personagens.forEach(personagem => {
        const coluna = criarColuna();
        const card = criarCardPersonagem(personagem);

        coluna.appendChild(card);
        row.appendChild(coluna);
    });
}