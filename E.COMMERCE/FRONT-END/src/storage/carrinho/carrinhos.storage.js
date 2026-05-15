const CARRINHO_KEY = 'carrinho';

function getCarrinho() {
    return JSON.parse(
        localStorage.getItem(CARRINHO_KEY) ||
        localStorage.getItem('favoritos') ||
        '[]'
    );
}

function setCarrinho(carrinho) {
    localStorage.setItem(CARRINHO_KEY, JSON.stringify(carrinho));
}

export function salvarCarrinho(produto, quantidade = 1) {
    const carrinho = getCarrinho();
    const existente = carrinho.find(item => item.id === produto.id);

    if (existente) {
        existente.quantity = Math.max(1, (existente.quantity || 1) + quantidade);
    } else {
        carrinho.push({ ...produto, quantity: Math.max(1, quantidade) });
    }

    setCarrinho(carrinho);
}

export function noCarrinho(produto) {
    const carrinho = getCarrinho();

    return carrinho.some(item => item.id === produto.id);
}

export function listarCarrinho(){
    return getCarrinho();
}

export function removerCarrinho(produto){
    const carrinho = getCarrinho();
    const carrinhoAtualizado = carrinho.filter(item => item.id !== produto.id);

    setCarrinho(carrinhoAtualizado);
}

export function alterarQuantidade(produto, quantidade) {
    const carrinho = getCarrinho();
    const item = carrinho.find(entry => entry.id === produto.id);

    if (!item) {
        return;
    }

    if (quantidade <= 0) {
        removerCarrinho(produto);
        return;
    }

    item.quantity = Math.max(1, quantidade);
    setCarrinho(carrinho);
}