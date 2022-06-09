import "./ItemLista.css";

// const ItemLista = (props) => {
//     return (
//         <tr>
//             <td class="text-center">{props.id}</td>
//             <td>{props.descricao}</td>
//             <td>{props.marca}</td>
//             <td>{props.quant}</td>
//             <td class="text-end">
//                 {Number(props.preco).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
//             </td>
//             <td class="text-center">
//                 <img src={props.foto} alt="Imagem do Produto" width="75" />
//             </td>
//             <td class="text-center">
//                 <i className="exclui text-danger fw-bold" title="Excluir">&#10008;</i>
//                 <i className="altera text-success fw-bold ms-2" title="Alterar">&#36;</i>
//             </td>
//         </tr>
//     );
// };

// faz a desestruturação de props
const ItemLista = ({id, descricao, marca, quant, preco, foto, excluirClick, alterarClick}) => {
    return (
        <tr>
            <td class="text-center">{id}</td>
            <td>{descricao}</td>
            <td>{marca}</td>
            <td>{quant}</td>
            <td class="text-end">
                {Number(preco).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
            </td>
            <td class="text-center">
                <img src={foto} alt="Imagem do Produto" width="75" />
            </td>
            <td class="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir"
                   onClick={excluirClick}>&#10008;</i>
                <i className="altera text-success fw-bold ms-2" title="Alterar"
                   onClick={alterarClick}>&#36;</i>
            </td>
        </tr>
    );
};


export default ItemLista;