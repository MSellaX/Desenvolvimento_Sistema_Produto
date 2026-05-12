import pedidoRepository from "../repositories/pedidoRepository.js";
import { ItensPedido } from "../models/ItensPedido.js"
import { Pedido } from "../models/Pedido.js";
import { statusPed } from "../enums/statusPedido.js";

const pedidoController = {


    criar: async (req, res) => {
        try {
            let { clienteId, itens } = req.body;

            const itensPedido = itens.map(item =>
                ItensPedido.criar({
                    produtoId: item.produtoId,
                    quantidade: item.quantidade,
                    valorItem: item.valorItem
                })
            );


            const subTotal = ItensPedido.calcularSubTotalItens(itensPedido)

            const pedido = Pedido.criar({ clienteId, subTotal, status: statusPed.ABERTO });
            console.log(pedido.subTotal);

            const result = await pedidoRepository.criar(pedido, itensPedido);
            res.status(201).json({ result });

        } catch (error) {
            res.status(500).json({
                message: 'Ocorreu um erro no servidor',
                errorMessage: error.message
            });
        }
    },
    deletar: async (req, res) => {

        try {
            const id = req.params.id;
            const result = await pedidoRepository.deletar(id);
            res.status(201).json({ result })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })
        }

    },
    editar: async (req, res) => {
        try {
            const id = req.params.id;
            const { clienteId, status, itens } = req.body;

            if (!id) {
                return res.status(400).json({ message: "Id é obrigatório" });
            }

            if (!Array.isArray(itens) || itens.length === 0) {
                return res.status(400).json({
                    message: "Itens do pedido são obrigatórios"
                });
            }

            for (const item of itens) {
                if (!item.produtoId || item.quantidade <= 0 || item.valorItem == null) {
                    return res.status(400).json({
                        message: "Item inválido no pedido"
                    });
                }
            }

            const pedidoAtual = await pedidoRepository.buscarPorId(id);
            
            if (!pedidoAtual) {
                return res.status(404).json({ message: "Pedido não encontrado" });
            }

            const itensPedido = await Promise.all(
                itens.map(item =>
                    ItensPedido.editar({
                        produtoId: item.produtoId,
                        quantidade: item.quantidade,
                        valorItem: item.valorItem,
                    })
                )
            );

            const subTotalNovo = ItensPedido.calcularSubTotalItens(itensPedido);
            let total = Number(pedidoAtual.subTotal) + Number(subTotalNovo);
            
            
            const pedido = Pedido.alterar(
                {
                    clienteId,
                    subTotal: total,
                    status: status ?? pedidoAtual.status
                },
                id
            );

            const result = await pedidoRepository.alterar(pedido, itensPedido);

            res.status(200).json({ data: result });

        } catch (error) {
            console.log(error);
            
            res.status(500).json({
                message: 'Ocorreu um erro no servidor',
                errorMessage: error.message
            });
        }
    },

    selecionar: async (req, res) => {
        try {
            const result = await pedidoRepository.selecionar();
            res.status(201).json({ result })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })
        }
    }



};

export default pedidoController;

