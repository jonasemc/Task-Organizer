import React from "react";
import Form from "../components/form/form";
import List from "../components/list/list";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
