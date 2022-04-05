import React from "react";
import Form from "../components/form/form";
import List from "../components/list/list";
import Cronometro from "../components/cronometro/cronometro";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Cronometro />
    </div>
  );
}

export default App;
