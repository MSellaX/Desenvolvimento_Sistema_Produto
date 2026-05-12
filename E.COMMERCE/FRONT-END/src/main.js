import criarNavBar, { ativarMenu } from "./components/layout/navbar.component";

import { personagensPage } from "./pages/personagem/personagens.page.js";
import { personagensFavoritosPage } from "./pages/personagem/favoritos.page";

criarNavBar();
personagensPage();

const btnHome = document.querySelector("#btnHome");
const btnFavoritos = document.querySelector("#btnFavoritos");

btnHome.addEventListener('click', ()=>{
    ativarMenu(btnHome);
    personagensPage();
})
btnFavoritos.addEventListener('click', ()=>{
    ativarMenu(btnFavoritos);
    personagensFavoritosPage();
});

