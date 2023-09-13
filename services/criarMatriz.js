export async function criarMatriz(tamanho) {
    const lista = [];

    for(let x = 0; x < tamanho; x++) {
            
            const linha = new Array(tamanho).fill('.');
            lista.push(linha);
    }

    for(let x = 0; x < tamanho; x++) {
        for(let y = 0; y < tamanho; y++) {
            const numRandom = Math.random();
            const intRandom = Math.round(numRandom);
            lista[y][x] = intRandom;
        }
    }
    return lista;
};