import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import api from '../services/api';

const Repository = () => {

  const { params } = useRouteMatch();
  const [repo, setRepo] = useState(null);

  /* Função para pegar informações do Repositório */

  useEffect(() => {
    api
      .get(
        `repos/${params.repository}`
      )
      .then((response) => {
        setRepo(response.data);
      });

  }, [params.repository, setRepo]);

  return (
    <>
      {repo && (
        <div className="App">
          <header >
            <div className="container">
              <div className="row">
                <div className="column">
                  <div className="repositoryBox">
                    <h2 className="repositoryBox-title">{repo.full_name}</h2>
                    <h3 className="repositoryBox-stars">{repo.stargazers_count}</h3>
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main>
            <div className="container">
              <div className="infoBox">
                <h4 className="infoBox-name">{repo.name}</h4>
                <p className="infoBox-description">{repo.description}</p>
                <h5 className="infoBox-language">Linguagem <span>{repo.language}</span></h5>
                <div className="infoBox-actions">
                  <a className="btn btn-primary" href={repo.html_url} target="_blank" rel="noopener noreferrer">Link do Repositório</a>
                  <Link className="btn btn-secondary" to="/">Voltar</Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  )
}

export default Repository;