export function salvarFavorito(personagem) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]'
    );

    const existente = favoritos.some(
        fav => fav.name === personagem.name
    );

    if (!existente) {
        favoritos.push(personagem);

        localStorage.setItem('favoritos', JSON.stringify(favoritos));

    }
}

export function ehFavorito(personagem) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]'
    );

    return favoritos.some(
        fav => fav.name === personagem.name
    );
}

export function listarFavoritos(){
    return JSON.parse(localStorage.getItem('favoritos') || '[]'
    );
}

export function removerFavorito(personagem){
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]'
    );

    const favortiosAtualizados = favoritos.filter(
        fav => fav.name !== personagem.name
    );

    localStorage.setItem('favoritos', JSON.stringify(favortiosAtualizados));
}