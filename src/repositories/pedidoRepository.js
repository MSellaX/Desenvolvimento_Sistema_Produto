import { connection } from '../configs/Database.js'

const pedidoRepository = {

    criar: async (pedido, itens) => {
        console.log('pedido: ', pedido.clienteId, pedido.subTotal, pedido.status);
        console.log('itens: ', itens[0]);


        const conn = await connection.getConnection();

        try {
            await conn.beginTransaction();

            // INSERT pedido
            const sqlPed = 'INSERT INTO pedidos(ClienteId, Subtotal, Status) VALUES (?,?,?);'
            const valuesPed = [pedido.clienteId, pedido.subTotal, pedido.status]
            const [rowsPed] = await conn.execute(sqlPed, valuesPed);

            // INSERT itens-pedido
            itens.forEach(async item => {
                const sqlItens = 'INSERT INTO itens_pedidos(PedidoId, ProdutoId, quantidade, ValorItem) VALUES (?,?,?,?);'
                const valuesItens = [rowsPed.insertId, item.produtoId, item.quantidade, item.valorItem];
                await conn.execute(sqlItens, valuesItens);
            });

            conn.commit();
            return { rowsPed };

        } catch (error) {
            await conn.rollback();
            throw new Error(error);
        }
        finally {
            conn.release();
        }
    },
    alterar: async (pedido, itensPedido) => {
        const conn = await connection.getConnection();

        try {
            await conn.beginTransaction();

            // Atualiza pedido
            const sqlPed = `
            UPDATE pedidos 
            SET SubTotal = ?, Status = ? 
            WHERE Id = ?
        `;
            await conn.execute(sqlPed, [
                pedido.subTotal,
                pedido.status,
                pedido.id
            ]);

            // Insere novos itens
            const sqlItem = `
            INSERT INTO itens_pedidos (PedidoId, ProdutoId, Quantidade, ValorItem)
            VALUES (?, ?, ?, ?)
        `;

            for (const item of itensPedido) {

                const [existe] = await conn.execute(
                    `SELECT Id 
         FROM itens_pedidos 
         WHERE PedidoId = ? AND ProdutoId = ?`,
                    [pedido.id, item.produtoId]
                );

                if (existe.length > 0) {
                    // 🟢 EDITA (não soma, substitui)
                    await conn.execute(
                        `UPDATE itens_pedidos 
             SET Quantidade = ?, ValorItem = ? 
             WHERE Id = ?`,
                        [item.quantidade, item.valorItem, existe[0].Id]
                    );
                } else {
                    // 🔵 INSERE novo item
                    await conn.execute(
                        `INSERT INTO itens_pedidos 
             (PedidoId, ProdutoId, Quantidade, ValorItem)
             VALUES (?, ?, ?, ?)`,
                        [pedido.id, item.produtoId, item.quantidade, item.valorItem]
                    );
                }
            }
            await conn.commit();

            return { message: "Itens adicionados ao pedido com sucesso" };

        } catch (error) {
            await conn.rollback();
            throw error;
        } finally {
            conn.release();
        }
    },
    buscarPorId: async (id) => {
        const conn = await connection.getConnection();

        try {
            // Busca o pedido
            const [pedidoRows] = await conn.execute(
                `SELECT Id, ClienteId, SubTotal, Status
             FROM pedidos
             WHERE Id = ?`,
                [id]
            );

            if (pedidoRows.length === 0) {
                return null;
            }

            const pedido = pedidoRows[0];

            // Busca os itens do pedido
            const [itensRows] = await conn.execute(
                `SELECT 
                Id,
                ProdutoId,
                Quantidade,
                ValorItem
             FROM itens_pedidos
             WHERE PedidoId = ?`,
                [id]
            );

            // Monta o objeto final
            return {
                id: pedido.Id,
                clienteId: pedido.ClienteId,
                subTotal: pedido.SubTotal,
                status: pedido.Status,
                itens: itensRows.map(item => ({
                    id: item.Id,
                    produtoId: item.ProdutoId,
                    quantidade: item.Quantidade,
                    valorItem: item.ValorItem
                }))
            };

        } catch (error) {
            console.error("Erro ao buscar pedido por ID:", error);
            throw error;
        } finally {
            conn.release();
        }
    },

    selecionar: async () => {


        try {
            // posso trazer de forma separada
            const [pedidos] = await connection.execute(`
            SELECT 
            *
            FROM pedidos p
            INNER JOIN itens_pedidos i ON i.PedidoId = p.Id
            INNER JOIN produtos r ON r.Id = i.ProdutoId;
            `);

            return pedidos;

        } catch (error) {
            console.error("Erro ao buscar clientes:", error);
            return {
                sucesso: false,
                mensagem: "Erro interno ao buscar clientes",
                erro: error.message
            };
        }
    },

    deletar: async (id) => {
        const conn = await connection.getConnection();

        try {
            await conn.beginTransaction();

            //DELETE itens
            const sqlItPed = 'DELETE FROM itens_pedidos WHERE PedidoId = ?';
            const valuesItPed = [id];
            const [rowsItPed] = await conn.execute(sqlItPed, valuesItPed);

            //DELETE Pedido
            const sqlPed = 'DELETE FROM pedidos WHERE Id = ?';
            const valuesPed = [id];
            const [rowsPed] = await conn.execute(sqlPed, valuesPed);


            await conn.commit();

            return { rowsItPed, rowsPed }


        } catch (error) {
            await conn.rollback();
            console.error("Erro ao criar cliente:", error);
            throw error;
        }
        finally {
            conn.release();
        }

    }
};

export default pedidoRepository;