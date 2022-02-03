import './index.scss'
import './fonts/fonts.scss'
import './Home.scss'

import Players from './components/Players'
    
function Home() {
  return (
    <div className="App">
      <div class="container">
        <input className="search" placeholder='Rechercher un joueur'></input>
        <div className="players">
          <Players/>
        </div>
      </div>
    </div>
  );
}

export default Home;