import { criarBotaoCarrinho } from "./button.component";
import criarImagemProduto from "./imagem.component";
import { salvarCarrinho, removerCarrinho, noCarrinho, alterarQuantidade } from '../../storage/carrinho/carrinhos.storage'
// componentes

export default function criarCardProduto(produto, { modo = 'produtos', aoMudarQtd, aoRemover } = {}) {
    const card = document.createElement('div');
    card.className = 'card card-produto border-0';

    const imagemContainer = document.createElement('div');
    imagemContainer.className = 'position-relative overflow-hidden';
    const imagem = criarImagemProduto(produto);
    imagem.classList.add('card-img-top', 'imagem-produto');
    imagemContainer.appendChild(imagem);

    const corpo = document.createElement('div');
    corpo.className = 'card-body';

    const marca = document.createElement('span');
    marca.className = 'text-uppercase small fw-bold text-warning';
    marca.innerText = produto.category || 'Desconhecido';

    const titulo = document.createElement('h5');
    titulo.className = 'card-title fw-bold mt-1 mb-2';
    titulo.innerText = produto.title;

    const preco = document.createElement('p');
    preco.className = 'mb-1 fw-bold text-success preco-produto';
    preco.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.price || 0);

    let qtd = produto.quantity || 1;
    let estaNoCarrinho = modo === 'carrinho' || noCarrinho(produto);

    if (estaNoCarrinho) {
        card.classList.add('favorito');
    }

    const btnCarrinho = criarBotaoCarrinho(estaNoCarrinho);
    const botaoMenos = document.createElement('button');
    botaoMenos.type = 'button';
    botaoMenos.className = 'btn btn-outline-secondary btn-sm';
    botaoMenos.innerText = '-';

    const botaoMais = document.createElement('button');
    botaoMais.type = 'button';
    botaoMais.className = 'btn btn-outline-secondary btn-sm';
    botaoMais.innerText = '+';

    const campoQtd = document.createElement('input');
    campoQtd.type = 'number';
    campoQtd.min = '1';
    campoQtd.value = qtd;
    campoQtd.className = 'form-control form-control-sm text-center';
    campoQtd.style.width = '64px';

    const grupoQtd = document.createElement('div');
    grupoQtd.className = 'd-flex align-items-center gap-1 controle-quantidade';
    grupoQtd.append(botaoMenos, campoQtd, botaoMais);

    const rodape = document.createElement('div');
    rodape.className = 'd-flex justify-content-between align-items-center gap-3 mt-3 flex-wrap';
    rodape.append(grupoQtd, btnCarrinho);

    const totalItem = document.createElement('small');
    totalItem.className = 'd-block text-muted produto-total';
    totalItem.innerText = `Total: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((produto.price || 0) * qtd)}`;

    function atualizarQtd(valor) {
        qtd = Math.max(1, Number(valor) || 1);
        campoQtd.value = qtd;
        totalItem.innerText = `Total: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((produto.price || 0) * qtd)}`;

        if (estaNoCarrinho) {
            alterarQuantidade(produto, qtd);
            if (aoMudarQtd) {
                aoMudarQtd();
            }
        }
    }

    botaoMenos.addEventListener('click', () => atualizarQtd(qtd - 1));
    botaoMais.addEventListener('click', () => atualizarQtd(qtd + 1));
    campoQtd.addEventListener('change', () => atualizarQtd(campoQtd.value));

    btnCarrinho.addEventListener('click', () => {
        if (modo === 'produtos') {
            if (estaNoCarrinho) {
                removerCarrinho(produto);
                estaNoCarrinho = false;
            } else {
                salvarCarrinho(produto, qtd);
                estaNoCarrinho = true;
            }

            btnCarrinho.classList.toggle('border-warning', estaNoCarrinho);
            btnCarrinho.classList.toggle('text-warning', estaNoCarrinho);
            btnCarrinho.classList.toggle('border-secondary', !estaNoCarrinho);
            btnCarrinho.classList.toggle('text-secondary', !estaNoCarrinho);
            card.classList.toggle('favorito', estaNoCarrinho);
        } else {
            removerCarrinho(produto);
            if (aoRemover) {
                aoRemover();
            }
        }
    });

    corpo.append(marca, titulo, preco, rodape);
    if (modo === 'carrinho') {
        corpo.appendChild(totalItem);
    }

    card.append(imagemContainer, corpo);
    return card;
}