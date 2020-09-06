import React, { Component } from "react";
import axios from 'axios';
import './styles/App.scss';
import Profile from './Profile';
import Repo from './Repo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "Iv1.3af9a41704e3eae8",
        client_secret: "58f09be9396ec7c1a288f67465c113a9c8b90984",
        count: "7",
        sort: "created: asc"
      },
      user: [],
      repos: []
    }
  }

  getUser (e) {
    const user = e.target.value;
    const { url, client_id, client_secret, count, sort } = this.state.github;
      axios
        .get (
          `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
        )
        .then(({ data }) => this.setState({ user:data }));
   }

  // selectChanged(e) {
  //   const sortBy = e.target.value;
  //   const state = this.state;
  //   if (sortBy == 'asc') {
  //     state.github.sort = 'full_name: asc';
  //   }
  //   if (sortBy == 'desc') {
  //     state.github.sort = 'full_name: desc';
  //   }
  //   this.setState({ github: { sort }});
  // }

  render() {
    
    const { user } = this.state;

    return (
      <div className="App">
        <header >
          <div className="container">
            <div className="row">
              <div className="column">
                <div className="searchBox">
                  <h1 className="searchBox-title">RepoSearch</h1>
                  <h3 className="searchBox-subtitle">Insira um username do GitHub e confira seus detalhes</h3>
                  <input onChange={this.getUser.bind(this)} id="search" type="text" className="searchBox-form" placeholder="GitHub username" required/>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
        <div className="container">
          <div className="contentBox">
            <div className="row">
            { user.length !== 0 ? <Profile user={user} /> : null }
            { user.length !== 0 ? <Repo user={user} /> : null }
            </div>
          </div>
        </div>
       </main>
      </div>
    );
  }
}

export default App;
