import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { GlobalStyle } from './styles/GlobalStyles';
import Alert from './components/layout/Alert';
import About from './pages/About';
import UserItem from './components/users/UserItem/UserItem';

const App = () => {
  return (
    <Router>
      <>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route />
        </Switch>
      </>
    </Router>

  );
};

export default App;
