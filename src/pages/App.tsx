import React, { useState } from "react";
import Form from "../components/form/form";
import List from "../components/list/list";
import Cronometro from "../components/cronometro/cronometro";
import style from "./App.module.scss";
import { Itarefa } from "../types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
