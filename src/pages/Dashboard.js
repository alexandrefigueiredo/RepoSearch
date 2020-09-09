import React, { useState } from 'react';
import Profile from '../components/Profile';
import api from '../services/api';

const Dashboard = () => {

  const [sort, setSort] = useState('desc');
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);

  /* Função para pegar informações do usuário da API */

  const getUser = (e) => {
    api
      .get(
        `users/${e.target.value}`
      )
      .then(({ data }) => setUser(data));

    api
      .get(
        `users/${e.target.value}/repos?sort=stars&direction=${sort}`
      )
      .then(({ data }) => {
        const dataSort = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(dataSort)
      });
  }

  /* Função para pegar filtrar a ordem de Repositórios entre ASC ou DESC */

  const handleFilter = (e) => {
    setSort(e.target.value);

    if (e.target.value === 'asc') {
      const starsSort = repos.sort((a, b) => a.stargazers_count - b.stargazers_count);
      setRepos(starsSort);
    }

    else if (e.target.value === 'desc') {
      const starsSort = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
      setRepos(starsSort);
    }

  }

  return (
    <div className="App">
      <header >
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="searchBox">
                <h1 className="searchBox-title">RepoSearch</h1>
                <h3 className="searchBox-subtitle">Insira um username do GitHub e confira seus detalhes</h3>
                <div className="row">
                  <div className="column _2">
                    <input onChange={getUser} id="search" type="text" className="searchBox-form" placeholder="GitHub username" required />
                  </div>
                  <div className="column">
                    <select onChange={handleFilter} id="selectRepo" className="searchBox-repo" required>
                      <option value="">Selecione a ordem dos repositórios</option>
                      <option value="asc">Ascendente</option>
                      <option value="desc">Decrescente</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="contentBox">
            {user.length !== 0 ? <Profile user={user} repos={repos} /> : null}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;