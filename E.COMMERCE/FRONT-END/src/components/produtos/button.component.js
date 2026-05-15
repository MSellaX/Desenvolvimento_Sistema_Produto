export function criarBotaoCarrinho(favorito = false){
    const button = document.createElement('button');
// component

    button.className = `
        btn p-0
        d-flex align-items-center justify-content-center
        bg-light bg-opacity-75
    `;

    button.style.width = '40px';
    button.style.height = '40px';

    if (favorito) {
        button.classList.add('border', 'border-warning', 'text-warning');
    } else {
        button.classList.add('border', 'border-secondary', 'text-secondary');
    }

    const icon = document.createElement('span');
    icon.className = `material-symbols-outlined`;
    icon.innerText = 'shopping_cart';

    button.appendChild(icon);

    return button;
}