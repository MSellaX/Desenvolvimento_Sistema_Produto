import { produtosPage } from '../../pages/produtos/produtos.page';
import { produtosCarrinhoPage } from '../../pages/produtos/carrinho.page';
// componente
export default function criarNavbar() {

  const header = document.querySelector('header');
  const nav = document.createElement('nav');

  nav.className = 'navbar navbar-expand-lg bg-dark shadow-sm';

  nav.innerHTML = `
  
    <div class="container-fluid">

      <a class="navbar-brand fw-bold text-white" href="#">
        Loja
      </a>

      <button 
        class="navbar-toggler bg-light" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="menu">

        <ul class="navbar-nav mb-2 mb-lg-0 d-flex flex-row gap-3">

          <li class="nav-item">
            <button 
              class="nav-link fw-bold text-primary active" 
              id="btnProdutos"
            >
              Produtos
            </button>
          </li>

          <li class="nav-item">
            <button 
              class="nav-link text-white fw-bold" 
              id="btnCarrinho"
            >
              Carrinho
            </button>
          </li>

        </ul>

      </div>
    </div>
  `;

  header.appendChild(nav);

  const btnProdutos = document.querySelector('#btnProdutos');
  const btnCarrinho = document.querySelector('#btnCarrinho');

  btnProdutos.addEventListener('click', () => {
    ativarMenu(btnProdutos);
    produtosPage();
  });

  btnCarrinho.addEventListener('click', () => {
    ativarMenu(btnCarrinho);
    produtosCarrinhoPage();
  });

}

export function ativarMenu(botaoClicado) {

  document.querySelectorAll('.nav-link').forEach(btn => {

    btn.classList.remove('active', 'text-primary');
    btn.classList.add('text-white');

  });

  botaoClicado.classList.add('active', 'text-primary');
  botaoClicado.classList.remove('text-white');

}                                                                                                                                          