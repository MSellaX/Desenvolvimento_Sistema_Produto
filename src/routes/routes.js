import { Router } from "express";
const routes = Router();
import categoriaRoutes from "./categoriaRoutes.js";
import produtoRoutes from "./prdutoRoutes.js";
import pedidoRoutes from "./pedidoRoutes.js";
import clienteRoutes from "./clienteRoutes.js";

routes.use('/pedidos', pedidoRoutes)
routes.use('/categorias', categoriaRoutes);
routes.use('/produtos', produtoRoutes);
routes.use('/clientes', clienteRoutes)

export default routes; 