function copiarMatriz(matriz) {
    return matriz.map(linha => [...linha]);
}

export function life(lista) {
    const tamanho = lista.length;
    const novaLista = copiarMatriz(lista);

    for (let y = 0; y < tamanho; y++) {
        for (let x = 0; x < tamanho; x++) {
            let laterais = 0;

            // Verificar à esquerda
            if (x > 0) {
                laterais += lista[y][x - 1];
            }
            
            // Verificar à direita
            if (x < tamanho - 1) {
                laterais += lista[y][x + 1];
            }
            
            // Verificar acima
            if (y > 0) {
                laterais += lista[y - 1][x];
            }
            
            // Verificar abaixo
            if (y < tamanho - 1) {
                laterais += lista[y + 1][x];
            }

            const estouVivo = lista[y][x] === 1 ? true : false;

            if (estouVivo) {
                laterais < 2 ? (novaLista[y][x] = 0) : laterais === 2 || laterais === 3 ? (novaLista[y][x] = 1) : laterais > 3 ? (novaLista[y][x] = 0) : null;
            } else {
                laterais === 3 ? (novaLista[y][x] = 1) : null;
            }
        }
    }
    return novaLista;
}