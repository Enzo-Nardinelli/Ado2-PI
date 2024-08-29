import "./NovaAtividade.css";
import {adcionarTarefa} from "./ListaAtividades";
import React, { useState } from 'react';


function NovaAtividade() {
  const [nomeAtividade, setNomeAtividade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prazo, setPrazo] = useState('');

  const handleChangeAtividade = (event) => {
    setNomeAtividade(event.target.value);
  };
  const handleChangeDescricao = (event) => {
    setDescricao(event.target.value);
  };
  const handleChangePrazo = (event) => {
    setPrazo(event.target.value);
  };

    return (
      <div>
        <form className="novaAtividade">
        <label htmlFor="nomeAtividade">Nome da atividade:</label>
        <input type="text" id="nomeAtividade" value={nomeAtividade} onChange={handleChangeAtividade}></input>
        <label htmlFor="descricao">Descrição</label>
        <input type="text" id="descricao" value={descricao} onChange={handleChangeDescricao}></input>
        <label htmlFor="prazo">Prazo</label>
        <input type="text" id="prazo" value={prazo} onChange={handleChangePrazo}></input>
        <button onClick={() => enviarAtividade(nomeAtividade, descricao, prazo)}>Confirmar</button>
        </form>
      </div>
    );
  }

  function PorQue(){

  }
  
  function enviarAtividade(nomeAtividade, descricao, prazo){
    adcionarTarefa(nomeAtividade, descricao, prazo);
  }


export default NovaAtividade;

