import React, { useState, useEffect } from "react";
import { criarMatriz } from "@/services/criarMatriz";
import { life } from "@/services/vida";

export default function Index() {
  const [plano, setPlano] = useState([]);
  const [iniciouJogo, setIniciouJogo] = useState(false);

  const criaMatrizInicial = async () => {
    const matriz = await criarMatriz(5);
    setPlano(matriz);
    setIniciouJogo(true);
  };

  useEffect(() => {
    let intervalId;

    if (iniciouJogo) {
      intervalId = setInterval(() => {
        if (plano && plano.length > 0) {
          const novoPlano = life(plano);
          setPlano(novoPlano);
          console.log(plano)
        }
      }, 2000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [iniciouJogo, plano]);

  return (
    <div>
      {!iniciouJogo ? (
        <button onClick={criaMatrizInicial}>Iniciar Jogo</button>
      ) : (
        <div>
          {plano && plano.length > 0 && (
            <div>
              {plano.map((linha, index) => (
                <div key={index}>
                  {linha.map((casa, idx) => (
                    <div key={idx}>{casa}</div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}