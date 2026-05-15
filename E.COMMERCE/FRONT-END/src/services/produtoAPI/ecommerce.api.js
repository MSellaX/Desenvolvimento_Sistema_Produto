import axios from "axios";

const API_URL = 'https://fakestoreapi.com/products';
// API
export async function  buscarProdutos() {
    try {
        
        const resposta = await axios.get(API_URL);
        return resposta.data;

    } catch (error) {
        console.error('Erro ao buscar personagens:', error);
        return [];
    }
}