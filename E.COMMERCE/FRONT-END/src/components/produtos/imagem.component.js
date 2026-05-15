export default function criarImagemProduto(produto) {
    const img = document.createElement('img');
// componente

    img.className = 'card-img-top img-fluid';

    img.alt = produto.title;

    img.style.height = '360px';
    img.style.objectFit = produto.image ? 'cover' : '';

    img.src = produto.image ? produto.image : '/default-character.png';

    return img
}

