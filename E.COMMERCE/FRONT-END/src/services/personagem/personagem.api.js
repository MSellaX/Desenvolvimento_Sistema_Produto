import axios from "axios";

const API_URL = 'https://hp-api.onrender.com/api/characters';

export async function  buscarPersonagens() {
    try {
        
        const resposta = await axios.get(API_URL);
        return resposta.data;

    } catch (error) {
        console.error('Erro ao buscar personagens:', error);
        return [];
    }
}