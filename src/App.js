import { Routes, Route } from "react-router-dom";
import MenuSuperior from "./components/MenuSuperior";
import InclusaoProdutos from "./components/InclusaoProdutos";
import ManutencaoProdutos from "./components/ManutencaoProdutos";
import ResumoProdutos from "./components/ResumoProdutos";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <MenuSuperior />
      <Routes>
        <Route path="/" element={<InclusaoProdutos />} />
        <Route path="manut" element={<ManutencaoProdutos />} />
        <Route path="resumo" element={<ResumoProdutos />} />
      </Routes>      
    </Fragment>
  );
}

export default App;
