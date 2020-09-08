import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from '../services/api';

const Repository = () => {

  const { params } = useRouteMatch();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    api
      .get(
        `repos/${params.repository}`
      )
      .then((response) => {
        console.log(response.data);
        setRepo(response.data);
        console.log(repo);
      });

  }, [])

  return (
    <>
      {repo && ( 
        <h1>{repo.full_name}</h1>
      )}
    </>
  )
}

export default Repository;