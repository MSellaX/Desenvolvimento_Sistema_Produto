import {buscarProdutos} from '../../services/produtoAPI/ecommerce.api';
import criarColuna from '../../components/shared/coluna-bootstrap.component';
import criarCardProduto from '../../components/produtos/card.component';

export async function produtosPage() {
    const app = document.querySelector("#app");

    // página de produtos
    app.innerHTML = `
        <h1 class="fw-bold text-primary">📦 Produtos </h1>
        <div class="row mt-4" id="lista-produtos"></div>
    `;

    const row = document.querySelector("#lista-produtos");

    const personagens = await buscarProdutos();

    personagens.forEach(produto => {
        const coluna = criarColuna();
        const card = criarCardProduto(produto);

        coluna.appendChild(card);
        row.appendChild(coluna);
    });
}