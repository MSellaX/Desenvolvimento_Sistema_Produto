
import pedidoController from "../controllers/pedidoController.js";
import {Router} from "express"

const pedidoRoutes = Router();

pedidoRoutes.post('/', pedidoController.criar);
pedidoRoutes.get('/',pedidoController.selecionar);
pedidoRoutes.delete('/:id',pedidoController.deletar);
pedidoRoutes.put('/:id',pedidoController.editar);

export default pedidoRoutes