import { Produtos } from "../models/Produtos.js";
import produtosRepository from "../repositories/produtosRepository.js";

const produtoController = {
    
    // Criar um novo produto, inserindo seus dados na tabela de produtos
    inserir : async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({message: 'Imagem não foi enviada'});
            }
            const { idCategoria, nome, valor } = req.body;
            const vinculoImagem = `/uploads/imagens/${req.file.filename}`;
            const produto = Produtos.criar({ idCategoria, nome, valor, vinculoImagem });
            const result = await produtosRepository.criar(produto);
            res.status(201).json({ result });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao inserir produto', errorMessage: error.message });
        }
    },

    // Editar um produto existente, atualizando seus campos com base no ID do produto
    alterar : async (req, res) => {
        try {
            const { idCategoria, nome, valor } = req.body;
            const idProduto = req.params.id;
            const vinculoImagem = req.file ? req.file.filename : null;
            const produto = Produtos.alterar({ idCategoria, nome, valor, vinculoImagem}, idProduto);
            const result = await produtosRepository.editar(produto);
            res.status(200).json({ result });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao alterar produto', errorMessage: error.message });
        }
    },

    // Deletar um produto com base no ID do produto, removendo-o da tabela de produtos
    deletar : async (req, res) => {
        try {
            const id = req.params.id;
            await produtosRepository.deletar(id);
            res.status(204).send();

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao deletar produto', errorMessage: error.message });
        }
    },

    // Selecionar todos os produtos, retornando uma lista de produtos com seus campos correspondentes
    selecionar : async (res) => {
        try {
            const result = await produtosRepository.selecionar();
            res.status(200).json({ result });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao selecionar produtos', errorMessage: error.message });
        }
    },

    // Selecionar um produto específico com base no ID do produto, retornando os campos correspondentes do produto
    selecionarId: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await produtosRepository.selecionarId(id);
            res.status(200).json({ result });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao selecionar produtos', errorMessage: error.message });
        }
    }
    
}

export default produtoController;