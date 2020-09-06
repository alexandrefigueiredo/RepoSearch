import React from 'react';

const Repo = ({ user }) => (
  <div className="column _2">
    <div className="contentBox-info user">
      <h2 className="user-name">{ user.name }</h2>
      <h4 className="user-username">{ user.login }</h4>
      <img className="user-photo" src={ user.avatar_url } alt="Foto de perfil"/>
      <p className="user-specs">Seguidores <span>{ user.followers }</span> Seguindo <span>{ user.following }</span></p>
      <h3 className="user-bio">{ user.bio }</h3>
      <p className="user-mail">{ user.email }</p>
    </div>
  </div>
)

export default Repo;