import { BrowserRouter as Router,
  Switch,
  Link,
  Route
  } from 'react-router-dom';

import Store from '../pages/store'
import Comprar from '../pages/comprar'


function Header() {

  return (
    <Router>
    <header>
      <section className="menu menu-loja">
        <div className="titulo">
          <a href="index.html" className="nome-banda-loja">OS GONZAGAS</a>
        </div> 
        <div className="container-menu">
            <ul className="lista-menu">
                <li className="menu-item"><a href="loja.html">Bonés</a></li>
                <li className="menu-item"><a href="loja.html">CDs/DVDs</a></li>
                <li className="menu-item"><div className="titulo">
                  <a href="store.html" className="nome-banda">LOJA</a>
                </div></li>
                <li className="menu-item"><a href="loja.html">Camisetas</a></li>
                <li className="menu-item"><a href="loja.html">Adesivos</a></li>
                
            </ul>
        </div>
        <div className="carrinho-comprar-container">
          <div className="comprar"><Link to="comprar.html">Comprar</Link></div>
          <div className="carrinho">Carrinho</div>
        </div>
      </section>
    </header>
        <Switch>
            <Route path="/store.html" component={Store} />
            <Route path="/comprar.html" component={Comprar} />
        </Switch>
    </Router>
  );
}

export default Header;