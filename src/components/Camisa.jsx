const Camisa = ({camisa, name, }) => {

  
  return (
          <div className="principal-camisa-card">
            <div className="principal-camisa-img">
              <img 
                src={camisa.imagem} 
                alt={name}
                className="imagem-camisa"
                />
            </div>
            <div className="principal-camisa-nome camisa-item">
              <h1>{camisa.modelo}</h1>
            </div>
            <div className="principal-camisa-preco">
              <p>Preço: R${camisa.preco.toFixed(2)}</p>
            </div>
            <div className="camisa-item">
              <button 
                className="principal-camisa-botao adicionar-camisa" 
                id={camisa.id}
                // onClick={handleClick}
                >
                  ADICIONAR
              </button>
            </div>
            <div className="camisa-item">
            <button className="principal-camisa-botao remover-camisa" 
              id={camisa.id}
            >
                REMOVER
              </button>
            </div>
          </div>
  );
}

export default Camisa;