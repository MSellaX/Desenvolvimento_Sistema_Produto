import { criarBotaoFavorito } from "./button.component";
import criarImagemPersonagem from "./imagem.component";
import { salvarFavorito, removerFavorito, ehFavorito } from '../../storage/Pedidos/pedidos.storage'
export default function criarCardPersonagem(personagem) {
    const card = document.createElement('div');
    card.className = 'card personagem-card border-0';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'position-relative overflow-hidden';

    const imagem = criarImagemPersonagem(personagem);
    imagem.classList.add('card-img-top', 'personagem-img');

    const btnContainer = document.createElement('div');
    btnContainer.className = 'position-absolute top-0 end-0 m-2';

    let favorito = ehFavorito(personagem);

    console.log(ehFavorito(personagem))

    if (favorito) {
        card.classList.add('favorito');
    }

    const button = criarBotaoFavorito(favorito);

    button.addEventListener('click', () => {
        favorito = !favorito;

        card.classList.toggle('favorito', favorito);

        if (favorito) {
            salvarFavorito(personagem);
        } else{
            removerFavorito(personagem);
        }
    });

    btnContainer.appendChild(button);
    imageContainer.append(imagem, btnContainer);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const casa = document.createElement('span');
    casa.className = 'text-upperCase small fw-bold text-warning';
    casa.innerText = personagem.house || 'Desconhecido';

    const nome = document.createElement('h5');
    nome.className = 'card-title fw-bold mt-1 mb-2';
    nome.innerText = personagem.name;

    cardBody.append(casa, nome);

    card.append(imageContainer, cardBody)

    return card;

}