import { Link } from "react-router-dom";

const MenuSuperior = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Mercado Avenida</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inclusão</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/manut">Manutenção</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resumo">Resumo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MenuSuperior;