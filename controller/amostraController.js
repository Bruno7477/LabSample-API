import { Amostra } from "../model/Amostra.js"
import { cadastrar, deletar, buscarPorIndice, listar} from "../repository/amostraRepository.js"

export function cadastrarAmostra(req, res){
    const {codigo, material, origem, resultado} = req.body; 

    const amostra = new Amostra(codigo, material, origem, resultado);

    cadastrar(amostra);

    res.status(201).json(amostra);
}

export function listartodos(req, res){
    const produtos = listar();

    res.status(200).json(produtos);
}

export function atualizarAmostra(req, res){
    const indice = Number (req.params.indice);

    const Amostra = buscarPorIndice(indice);

    if(!Amostra) {
        return res.status(404).json({
            mensagem: "Amostra não encontrada"
        });
    }

    const {codigo, material, origem, resultado } = req.body;

    if (codigo !== undefined){
        Amostra.codigo = codigo;
    }

    if (material !== undefined){
        Amostra.material = material;
    }

    if (origem !== undefined){
        Amostra.origem = origem;
    }

    if (resultado !== undefined){
        Amostra.resultado = resultado;
    }

    atualizar(indice, Amostra);

    res.status(200).json(Amostra);
}

export function deletarAmostra(req, res){
    const indice = Number(req.params.indice);

    const Amostra = buscarPorIndice(indice);

    if(!Amostra){
        return res.status(404).json({
            mensagem: "Amostra não encontrada"
        });
    }

    deletar(indice);

    res.status(200).json({
        mensagem: "Amostra excluída com sucesso"
    });
}

export function buscarAmostraPorId(req, res) {
  const indice = Number(req.params.indice);

  const amostra = buscarPorIndice (indice);

  if (!amostra) {
    return res.status(404).json({
      mensagem: "Amostra não encontrada"
    });
  }

  return res.status(200).json(amostra);
}

