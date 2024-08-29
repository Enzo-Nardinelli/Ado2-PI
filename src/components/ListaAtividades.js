import Atividade from "./Atividade";

let aaa = {
  "nomeAtividade": "nomeAtividade",
  "descricao": "descricao",
  "prazo": "prazo"
}
const atividades = [aaa]; 
let index = 0;

function ListaAtividades() {
  return (
      <div>
           
                { atividades.map( (atividade) => <Atividade nomeAtividade={atividade.nomeAtividade} descricao={atividade.descricao} prazo={atividade.prazo}/>) } 
           
        </div>
    );
  }

  function adcionarTarefa(nomeAtividade, descricao, prazo){

    let atividade = {
      "nomeAtividade": nomeAtividade,
      "descricao": descricao,
      "prazo": prazo
    }

    atividades[index]=atividade;

    index++;

    for (let i = 0; i < index+1; i++) {
      alert(atividades[i].nomeAtividade)
    }
  }

export default ListaAtividades;
export {
  adcionarTarefa
}