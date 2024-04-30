import './App.css'
import pigImage from './images/pig.png';
import { LeftPanel } from './components/LeftPanel';
import { CenterPanel } from './components/CenterPanel';
import { RightPanel } from './components/RightPanel';

function App() {
  return (
    <div className='content'>

      <header>
        <div className='logo-name'>
          <img className='img-logo' src={pigImage} />
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
          <LeftPanel />
        </div>

        <div className='center-panel'>
          <CenterPanel />
        </div>

        <div className='right-panel'>
          <RightPanel />
        </div>
      </main>

    </div>
  )
}

export default App
