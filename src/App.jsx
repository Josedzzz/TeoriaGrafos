import './App.css'
import pigImage from './images/pig.png';
import { LeftPanel } from './components/LeftPanel';
import { CenterPanel } from './components/CenterPanel';
import { RightPanel } from './components/RightPanel';
import { useState } from 'react';
import { Grafo } from './model/Grafo';
import { Glosario } from './components/Glosario';
import { LeftTreePanel } from './components/LeftTreePanel';
import { CenterTreePanel } from './components/CenterTreePanel';
import { Tree } from './model/Tree';
import { Inicio } from './components/Inicio';

function App() {
  const [grafo, setGrafo] = useState(new Grafo())
  const [leftPanelKey, setLeftPanelKey] = useState(0)
  const [rightPanelKey, setRightPanelKey] = useState(0)
  const [mainContent, setMainContent] = useState('grafo')

  const [tree, setTree] = useState(new Tree())
  const [leftTreePanelKey, setLeftTreePanelKey] = useState(0)

  const actualizarGrafo = nuevoGrafo => {
    setGrafo(nuevoGrafo);
    //Lo uso para forzar el renderizado de la información de la izquierda y derecha
    setLeftPanelKey(prevKey => prevKey + 1)
    setRightPanelKey(prevKey => prevKey + 1)
  }

  const actualziarArbol = nuevoArbol => {
    setTree(nuevoArbol)
    setLeftTreePanelKey(prevKey => prevKey + 1)
  }

  //Actualiza el contenido del main dependiendo a el link al que se le da click
  const handleContentClick = (content) => {
    setMainContent(content)
  }

  //Renderiza el apartado del contenido del grafo
  const renderContentGrafo = () => {
    return (
      <main>
        <div className='left-panel'>
          <LeftPanel key={leftPanelKey} grafo={grafo} />
        </div>

        <div className='center-panel'>
          <CenterPanel grafo={grafo} actualizarGrafo={actualizarGrafo} />
        </div>

        <div className='right-panel'>
          <RightPanel key={rightPanelKey} grafo={grafo} />
        </div>
      </main>
    )
  }

  //Rnderiza el apartado del contenido de arboles
  const renderContentArbol = () => {
    return (
      <main>

        <div className='left-tree-panel'>
          <LeftTreePanel key={leftTreePanelKey} arbol={tree} />
        </div>

        <div className='center-tree-panel'>
          <CenterTreePanel arbol={tree} actualizarArbol={actualziarArbol}/>
        </div>

      </main>
    )
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
            <li><a onClick={() => handleContentClick('inicio')}>Inicio</a></li>
            <li><a onClick={() => handleContentClick('grafo')}>Construcción de grafos</a></li>
            <li><a onClick={() => handleContentClick('arbol')}>Construcción de árboles</a></li>
            <li><a onClick={() => handleContentClick('glosario')}>Glosario</a></li>
          </ul>
        </div>
      </header>

      {mainContent === 'inicio' && <Inicio />}
      {mainContent === 'grafo' && renderContentGrafo()}
      {mainContent === 'arbol' && renderContentArbol()}
      {mainContent === 'glosario' && <Glosario />}

    </div>
  )
}

export default App