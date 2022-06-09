import { useState } from "react";
import { useForm } from "react-hook-form";
import { inAxios } from "../config_axios";

const InclusaoProdutos = () => {
  // register serve para definir os nomes dos campos do form (e validações)
  // handleSubmit, para indicar o método a ser acionado no evento onSubmit do form
  const { register, handleSubmit, reset } = useForm();

  const [aviso, setAviso] = useState("");

  // método chamado ao enviar o form (onSubmit)
  const salvar = async (campos) => {
    try {
      const response = await inAxios.post("produtos", campos);
      setAviso(`Ok! Produto cadastrado com código ${response.data.id}`);
    } catch (error) {
      setAviso(`Erro... Produto não cadastrado: ${error}`);
    }
    // setTimeout: executa o comando após o tempo indicado (em milissegundos)
    setTimeout(() => {
      setAviso("");
    }, 5000);
    // limpa os campos de formulário para uma nova inclusão
    reset({ descricao: "", marca: "", foto: "", quant: "", preco: "" });
  }

  return (
    <div className="container">
      <h4 className="fst-italic mt-3">Inclusão </h4>
      <form onSubmit={handleSubmit(salvar)}>
        <div className="form-group">
          <label htmlFor="descricao">Produto:</label>
          <input type="text" className="form-control" id="descricao"
            required autoFocus {...register("descricao")} />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="marca">Marca:</label>
          <input type="text" className="form-control" id="marca" required
            {...register("marca")} />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="foto">URL da Foto:</label>
          <input type="url" className="form-control" id="foto" required
            {...register("foto")} />
        </div>
        <div className="row mt-2">
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="quant">Quantidade:</label>
              <input type="number" className="form-control" id="quant" required
                {...register("quant")} />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="form-group">
              <label htmlFor="preco">Preço R$:</label>
              <input type="number" className="form-control" id="preco"
                step="0.01" required {...register("preco")} />
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-primary mt-3" value="Enviar" />
        <input type="reset" className="btn btn-danger mt-3 ms-3" value="Limpar" />
      </form>
      <div className={aviso.startsWith("Ok!") ? "alert alert-success" :
                      aviso.startsWith("Erro") ? "alert alert-danger" : 
                      ""}>{aviso}</div>
    </div>
  );
}

export default InclusaoProdutos;