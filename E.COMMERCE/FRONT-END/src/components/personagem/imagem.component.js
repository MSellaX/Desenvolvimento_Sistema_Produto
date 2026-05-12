export default function criarImagemPersonagem(personagem) {
    const img = document.createElement('img');

    img.className = 'card-img-top img-fluid';

    img.alt = personagem.name;

    img.style.height = '360px';
    img.style.objectFit = personagem.image ? 'cover' : '';

    img.src = personagem.image ? personagem.image : '/default-character.png';

    return img
}