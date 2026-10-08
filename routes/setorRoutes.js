import express from "express";
import { cadastrarSetor, listartodos, atualizarSetor, deletarSetor, buscarSetorPorId } from "../controller/setorController.js";

const router = express.Router();

router.post("/", cadastrarSetor);
router.get("/", listartodos);
router.patch("/:indice", atualizarSetor);
router.delete("/:indice", deletarSetor);
router.get("/:indice", buscarSetorPorId)

export default router;
