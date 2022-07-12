import Button from "../button/button";
import Relogio from "./relogio/relogio";
import style from "./cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/date";

export default function Cronometro() {
  console.log("conversao:", tempoParaSegundos("01:01:01"));
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Button> Comecar!</Button>
    </div>
  );
}
