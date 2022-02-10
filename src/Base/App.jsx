import { useState } from 'react';
import { Quiz } from '../Quiz/perguntas';
import './App.css';
import { BodyQuiz, Botao, HeadQuiz, ShapeQuiz } from './styled';

import kinhaFoto from "../img/kinha.png";
import jojoFoto from "../img/jojo.png";
import rodFoto from "../img/rod.png";
import gelFoto from "../img/gel.png";
import tonhoFoto from "../img/tonho.png";


function App() {

  const [title, setTitle] = useState('Quem é você na DEX22 da CIMATEC jr? 😳')
  const [pagina, setPagina] = useState(0);
  const [escolha, setEscolha] = useState('');

  const [gel, setGel] = useState(0);
  const [tonho, setTonho] = useState(0);
  const [kinha, setKinha] = useState(0);
  const [jojo, setJojo] = useState(0);
  const [rod, setRod] = useState(0);

  const reset = () => {
    setTitle("Quem é você na DEX22 da CIMATEC jr? 😳")
    setPagina(0)
    setEscolha('')
    setGel(0)
    setTonho(0)
    setKinha(0)
    setJojo(0)
    setRod(0)
  }

  const getResultado = () => {
    var dex = [
      {
        nome: 'Gel',
        valor: gel,
        foto: gelFoto
      },
      {
        nome: 'Tonho',
        valor: tonho,
        foto: tonhoFoto
      },
      {
        nome: 'Kinha',
        valor: kinha,
        foto: kinhaFoto
      },
      {
        nome: 'Jojo',
        valor: jojo,
        foto: jojoFoto
      },
      {
        nome: 'Rod',
        valor: rod,
        foto: rodFoto
      },
    ]

    dex.sort((a , b) => b.valor - a.valor)

    return dex[0];

  }


  const addPoint = (setDex) => {
    setDex((prev) => {
      return prev + 1;
    })
  }

//Angelica: 1
// Tonho: 2
// Kinha: 3
// Jojo: 4
// Rod: 5
  const nextPage = () => {

    if (escolha === '1') addPoint(setGel);
    else if (escolha === '2') addPoint(setTonho);
    else if (escolha === '3') addPoint(setKinha);
    else if (escolha === '4') addPoint(setJojo);
    else if (escolha === '5') addPoint(setRod);
    else {
      if (pagina > 0) {
        alert('Selecione uma opção válida!')
        return
      }
    }


    setPagina((prev) => {
      return prev + 1
    })
  }


  const textoBotao = () => {
    if (pagina === 0) return 'COMEÇAR';
    else if (pagina === 12) {
      return 'CONCLUIR'
    }
    else return 'PRÓXIMA';
  }

  return (
    <>
      <ShapeQuiz>
        <HeadQuiz>
          {title}
        </HeadQuiz>
        <BodyQuiz>
          <Quiz pagina={pagina} setTitle={setTitle} escolher={setEscolha} result={getResultado}></Quiz>
        </BodyQuiz>
      </ShapeQuiz>

      <div style={{width: '100%', display:'flex', justifyContent:'center'}}>
        {pagina <= 12 ? <Botao onClick={nextPage}>{textoBotao()}</Botao> : <Botao onClick={reset}>Reiniciar</Botao>}
      </div>
    </>
  );
}

export default App;
