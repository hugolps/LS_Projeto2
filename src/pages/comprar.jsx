import React from 'react';
import { Formik, Field, Form } from 'formik';
import '../../src/components/App.css';

const Comprar = () => {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  function validaCep(testarCep) {
    const cepRegex = /\d{2}\.?\d{3}-?\d{3}/
    if (cepRegex.test(testarCep)) {
      return testarCep    
    }
    else {
      console.log("CEP Inválido")
    }
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = validaCep(value.replace(/[^0-9]/g, ''));

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
      });
  }

  return (
    <div className="endereco-comprar">
      <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          cep: '',
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          cidade: '',
          uf: '',
        }}
        render={({ isValid, setFieldValue }) => (
          <Form >
            
            <div className="endereco-titulo">
              <h1 className="endereco-h1">Endereço</h1>
            </div>
            <div className="cep">
              <Field 
                className="cep-input" 
                name="cep" 
                type="text"
                placeholder="Informe o seu CEP"
                id="cep" 
                onBlur={(ev) => onBlurCep(ev, setFieldValue)} 
              />
              <div className="cep-enviar">
              <button className="cep-botao" type="submit" disabled={!isValid}>BUSCAR CEP</button>
              </div>
            </div>
            <div className="form-group">
              <label>Logradouro</label>
              <Field 
                name="logradouro" 
                type="text"
                className="endereco-input"
                placeholder="Logradouro"
                id="logradouro" 
              />
            </div>
            <div className="form-group">
              <label>Bairro</label>
              <Field 
                name="bairro" 
                type="text" 
                className="endereco-input" 
                placeholder="Bairro" 
                id="bairro"
              />
            </div>
            <div className="form-group">
              <label>Cidade</label>
              <Field 
                name="cidade" 
                type="text" 
                className="endereco-input" 
                placeholder="Cidade" 
                id="localidade"
              />
            </div>
            <div className="form-group">
              <label>Estado</label>
              <Field 
                name="uf" 
                type="text" 
                className="endereco-input" 
                placeholder="UF" 
                id="uf"
              />
            </div>

          </Form>
        )}
      />
    </div>
  );

}

export default Comprar;