import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ArticleList from './components/ArticleList'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4 text-center">My test task</h1>
        </div>
        <ArticleList />
      </div>
    );
  }
}

export default App;
