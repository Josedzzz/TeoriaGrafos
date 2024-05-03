import './App.css'
import pigImage from './images/pig.png';
import { LeftPanel } from './components/LeftPanel';
import { CenterPanel } from './components/CenterPanel';
import { RightPanel } from './components/RightPanel';
import { useState } from 'react';
import { Grafo } from './model/Grafo';

function App() {
  const [grafo, setGrafo] = useState(new Grafo())
  const [leftPanelKey, setLeftPanelKey] = useState(0)

  const actualizarGrafo = nuevoGrafo => {
    setGrafo(nuevoGrafo);
    //Lo uso para forzar el renderizado de la información de la izquierda
    setLeftPanelKey(prevKey => prevKey + 1)
  }

  return (
    <div className='content'>

      <header>
        <div className='logo-name'>
          <img className='img-logo' src={pigImage} alt="pig logo" />
          <h1>PIG</h1>
        </div>
        <div className='links-top'>
          <ul className='links'>
            <li><a>Construcción de grafos</a></li>
            <li><a>Otros...</a></li>
          </ul>
        </div>
      </header>

      <main>
        <div className='left-panel'>
          <LeftPanel key={leftPanelKey} grafo={grafo} />
        </div>

        <div className='center-panel'>
          <CenterPanel grafo={grafo} actualizarGrafo={actualizarGrafo} />
        </div>

        <div className='right-panel'>
          <RightPanel grafo={grafo} />
        </div>
      </main>

    </div>
  )
}

export default App