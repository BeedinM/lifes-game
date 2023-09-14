import React, { useState, useEffect } from "react";
import { criarMatriz } from "@/services/criarMatriz";
import { life } from "@/services/vida";

import styles from '../styles/utils.module.css';

import Celula from "@/components/celula/celula";

export default function Index() {
  const [plano, setPlano] = useState([]);
  const [iniciouJogo, setIniciouJogo] = useState(false);

  const criaMatrizInicial = async () => {
    const matriz = await criarMatriz(170);
    setPlano(matriz);
    setIniciouJogo(true);
  };

  useEffect(() => {
    let intervalId;

    if (iniciouJogo) {
      intervalId = setInterval(() => {
        if (plano && plano.length > 0) {
          
          setPlano((planoAnterior) => {
            const novoPlano = life(planoAnterior);
            return novoPlano;
          });
        }
      }, 1000); 
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [iniciouJogo, plano]);

  return (
    <div>
      {!iniciouJogo ? (
        <button onClick={criaMatrizInicial}>Iniciar autômato</button>
      ) : (
        <div className={styles.container}>
          {plano && plano.length > 0 && (
            <div>
              {plano.map((linha, index) => (
                <div key={index} className={styles.container2}>
                  {linha.map((casa, idx) => {
                    const linhaP = index + 1;
                    const colunaP = idx + 1;
                    const idFormat = `${linhaP},${colunaP}`
                    return (
                      <Celula key={idx} id={idFormat} item={casa}/>
                    )
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}