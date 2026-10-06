const amostras = []

export function cadastrar(Amostra) {
    amostras.push(Amostra);
}

export function listar() {
    return amostras;
}

export function buscarPorIndice(indice) {
  return amostras [indice];
}

export function deletar(indice) {
    amostras.splice(indice, 1);
}