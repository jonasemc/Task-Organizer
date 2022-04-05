import Button from "../button/button";
import Relogio from "./relogio/relogio";
import style from "./cronometro.module.scss";

export default function Cronometro() {
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
