import express from "express";
import { cadastrarAmostra, listartodos, atualizarAmostra, deletarAmostra, buscarAmostraPorId } from "../controller/amostraController.js";

const router = express.Router();

router.post("/", cadastrarAmostra);
router.get("/", listartodos);
router.patch("/:indice", atualizarAmostra);
router.delete("/:indice", deletarAmostra);
router.get("/:indice", buscarAmostraPorId)

export default router;
