export function criarBotaoFavorito(favorito = false){
    const button = document.createElement('button');

    button.className = `
        btn p-0 border-0 rounded-circle
        d-flex align-items-center justify-content-center
        bg-light bg-opacity-75
    `;

    button.style.width = '24px';
    button.style.height = '24px';

    const icon = document.createElement('span');
    icon.className = `material-symbols-outlined`
    icon.innerText = ' favorite';
    
    button.appendChild(icon)

    return button; 
}