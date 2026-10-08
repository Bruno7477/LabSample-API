const setores = []

export function cadastrar(Setor) {
    setores.push(Setor);
}

export function listar() {
    return setores;
}

export function buscarPorIndice(indice) {
  return setores [indice];
}

export function deletar(indice) {
    setores.splice(indice, 1);
}

export function atualizarSetor(indice, dadosAtualizados) {
    setores[indice] = dadosAtualizados;
}