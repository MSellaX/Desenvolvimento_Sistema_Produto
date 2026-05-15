import { listarCarrinho } from '../../storage/carrinho/carrinhos.storage'
import criarColuna from '../../components/shared/coluna-bootstrap.component'
import criarCardProduto from '../../components/produtos/card.component';

export async function produtosCarrinhoPage() {

    //página de carrinho
    const app = document.querySelector("#app");

    app.innerHTML = `
        <h1 class="fw-bold text-primary">🛒 carrinho </h1>
        <div class="row mt-4" id="lista-carrinho"></div>
        <div class="mt-4 text-end carrinho-total" id="carrinho-total"></div>
    `;

    const row = document.querySelector('#lista-carrinho');
    const totalElement = document.querySelector('#carrinho-total');

    function atualizarTotal() {
        const produtos = listarCarrinho();
        const total = produtos.reduce((soma, item) => soma + ((item.price || 0) * (item.quantity || 1)), 0);

        if (produtos.length === 0) {
            row.innerHTML = '<div class="col-12"><p class="text-muted">Seu carrinho está vazio.</p></div>';
            totalElement.innerHTML = '';
            return;
        }

        totalElement.innerHTML = `
            <span class="fw-bold fs-5">Total do carrinho:</span>
            <span class="fs-5 text-success">${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</span>
        `;
    }

    const produtos = listarCarrinho();

    if (produtos.length === 0) {
        row.innerHTML = '<div class="col-12"><p class="text-muted">Seu carrinho está vazio.</p></div>';
        totalElement.innerHTML = '';
        return;
    }

    produtos.forEach(produto => {
        const coluna = criarColuna();
        const card = criarCardProduto(produto, {
            modo: 'carrinho',
            onQuantidadeChange: () => {
                atualizarTotal();
            },
            onRemove: () => {
                coluna.remove();
                atualizarTotal();
            }
        });

        coluna.appendChild(card);
        row.appendChild(coluna);
    });

    atualizarTotal();
};