import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { GlobalStyle } from './styles/GlobalStyles';
import Alert from './components/layout/Alert';
import About from './pages/About';
import UserItem from './components/users/UserItem/UserItem';
import GithubState from './context/Github/GithubState';
import AlertState from './context/Alert/AlertState';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <GlobalStyle />
          <Header />
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/user/:login" component={UserItem} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
