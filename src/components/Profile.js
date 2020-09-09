import React from 'react';
import User from '../components/User';
import Repo from '../components/Repo';
import FadeIn from 'react-fade-in';

const Profile = ({ user, repos }) => {
  return (
    <FadeIn delay={200} transitionDuration={800}>
      <div className="row">
        <div className="column">
          <User user={user} />
        </div>
        <div className="column _2">
          <div className="contentBox-info repo">
            {repos.map(repo => <Repo key={repo.name} repo={repo} />)}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default Profile;