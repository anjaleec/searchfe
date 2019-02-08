import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Search from "./Components/Search";
import { Router, Route, browserHistory } from "react-router";

class App extends React.Component {
    render() {
      return (
        <Router history={browserHistory}>
          <Route path={"/search"} component={Search} />
        </Router>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
