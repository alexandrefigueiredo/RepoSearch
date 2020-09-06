import React from 'react';

const Repo = ({ repo }) => (
  <div className="repo-card">
    <h3 className="repo-card__name">{repo.name}</h3>
  </div>
)

export default Repo;