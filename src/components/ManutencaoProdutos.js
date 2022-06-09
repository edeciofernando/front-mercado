import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { inAxios } from "../config_axios";
import ItemLista from "./ItemLista";

const ManutencaoProdutos = () => {

  const [produtos, setProdutos] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const obterLista = async () => {
    try {
      const lista = await inAxios.get("produtos");
      setProdutos(lista.data);
      //      console.log(lista.data);
    } catch (error) {
      alert(`Erro... Não foi possível obter os dados: ${error}`);
    }
  };

  // define o método que será executado assim que o componente for renderizado
  useEffect(() => {
    obterLista();
  }, []);

  const filtrarLista = async (campos) => {
    try {
      const lista = await inAxios.get(`produtos/pesq-campos/${campos.palavra}`);
      lista.data.length
        ? setProdutos(lista.data)
        : alert("Não há produtos com a palavra-chave pesquisada...");
    } catch (error) {
      alert(`Erro... Não foi possível obter os dados: ${error}`);
    }
  };

  const excluir = async (id, descricao) => {
    if (!window.confirm(`Confirma a exclusão do produto "${descricao}"?`)) {
      return;
    }
    try {
      await inAxios.delete(`produtos/${id}`);
      setProdutos(produtos.filter((produto) => produto.id !== id));
    } catch (error) {
      alert(`Erro... Não foi possível excluir este produto: ${error}`);
    }
  };

  const alterar = async (id, descricao, index) => {
    const novoPreco = Number(prompt(`Informe o novo preço do produto "${descricao}"`));
    if (isNaN(novoPreco) || novoPreco === 0) {
      return;
    }
    try {
      await inAxios.put(`produtos/${id}`, { preco: novoPreco });
      const produtosAlteracao = [...produtos];
      produtosAlteracao[index].preco = novoPreco;
      setProdutos(produtosAlteracao);
    } catch (error) {
      alert(`Erro... Não foi possível alterar o preço: ${error}`);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-7">
          <h4 className="fst-italic mt-3">Manutenção</h4>
        </div>
        <div className="col-sm-5">
          <form onSubmit={handleSubmit(filtrarLista)}>
            <div className="input-group mt-3">
              <input type="text" className="form-control"
                placeholder="Descrição ou Marca" required {...register("palavra")} />
              <input type="submit" className="btn btn-primary" value="Pesquisar" />
              <input type="button" className="btn btn-danger" value="Todos"
                onClick={() => { reset({ palavra: "" }); obterLista(); }} />
            </div>
          </form>
        </div>
      </div>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Cód.</th>
            <th>Descrição do Produto</th>
            <th>Marca</th>
            <th>Quant.</th>
            <th>Preço R$</th>
            <th>Foto</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <ItemLista
              key={produto.id}
              id={produto.id}
              descricao={produto.descricao}
              marca={produto.marca}
              quant={produto.quant}
              preco={produto.preco}
              foto={produto.foto}
              excluirClick={() => excluir(produto.id, produto.descricao)}
              alterarClick={() => alterar(produto.id, produto.descricao, index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ManutencaoProdutos;