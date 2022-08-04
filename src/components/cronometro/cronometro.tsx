import Button from "../button/button";
import Relogio from "./relogio/relogio";
import style from "./cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
  selecionado: Itarefa | undefined;
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    selecionado?.tempo && setTempo(tempoParaSegundos(selecionado.tempo));
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Button onClick={() => regressiva(tempo)}> Comecar!</Button>
    </div>
  );
}
