import React from 'react';
import { Link } from 'react-router-dom';

const Repo = ({ repo }) => (
  <Link to={`/repository/${repo.full_name}`}>
    <div className="repo-card">
      <h3 className="repo-card__name">{repo.name}</h3>
    </div>
  </Link>
)

export default Repo;