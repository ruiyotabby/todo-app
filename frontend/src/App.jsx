import { useState } from 'react';
import './App.css';
import Icon from '@mdi/react';
import { mdiMenu, mdiCloseThick } from '@mdi/js';
import SideBar from './Components/SideBar';

function App() {
  const [navBar, setNavBar] = useState(false);

  return (
    <>
      <div>
        { window.visualViewport.width >= 413 && <SideBar /> }
        { window.visualViewport.width < 413
          && <div>
              <Icon
                onClick={() => setNavBar(!navBar)}
                className='hamburgSvg'
                path={mdiMenu}
                size={1}
                rotate={navBar ? -90 : 0}
              />
              <ul className={`nav ${navBar ? 'show' : ''}`}>
                <Icon onClick={() => setNavBar(!navBar)} className='closeSvg' path={mdiCloseThick} size={1} />
                <SideBar />
              </ul>
            </div>
        }
      </div>
      <div className='body'>
        <h2>Todo App</h2>
      </div>
    </>
  );
}

export default App;
