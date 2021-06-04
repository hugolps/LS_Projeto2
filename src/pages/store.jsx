import React from 'react';

import camisas from '../models/camisas';
import Camisa from '../components/Camisa';


const Store = () => {


  return (
    <main className="main-loja">
      
      <div className="principal-loja-titulo"><h1>CARRINHO</h1></div>
      <div className="principal-loja-total"><h2>Valor Total: R$<span className="total-carrinho">0</span></h2></div>
        <div className="principal-loja-total"><h2>Quantidade de itens: <span className="quantidade-itens">0</span></h2></div>


      <div className="principal-loja-titulo"><h1>CAMISAS</h1> </div>

      {/* <Camisa camisa={camisa} /> */}
        <section className="principal-camisas">
          {camisas.map((camisa) => {
            return <Camisa camisa={camisa} name={camisa.modelo} key={camisa.id} />;
          })}
          
        </section>
      </main>
  )
}

export default Store;