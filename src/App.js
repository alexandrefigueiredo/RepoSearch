import React from 'react';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="searchBox">
                <h1 className="searchBox-title">RepoSearch</h1>
                <h3 className="searchBox-subtitle">Insira um username do GitHub e confira seus detalhes</h3>
                <input id="search" type="text" className="searchBox-form" placeholder="GitHub username" required/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
