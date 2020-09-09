import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

const Repo = ({ repo }) => (
  <FadeIn delay={200} transitionDuration={800}>
    <Link to={`/repository/${repo.full_name}`}>
      <div className="repo-card">
        <h3 className="repo-card__name">{repo.name}</h3>
        <h3 className="repo-card__stars">{repo.stargazers_count}</h3>
      </div>
    </Link>
  </FadeIn>
)

export default Repo;