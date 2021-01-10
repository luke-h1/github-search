import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Navbar';
import { GlobalStyle } from './styles/GlobalStyles';
import Alert from './components/layout/Alert';
import About from './pages/About';
import GithubState from './context/Github/GithubState';
import AlertState from './context/Alert/AlertState';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SingleUser from './components/users/SingleUser/SingleUser';

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
            <Route path="/user/:login" component={SingleUser} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
