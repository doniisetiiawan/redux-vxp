import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage/Loadable';
import LoginPage from '../Login/Loadable';
import RegisterPage from '../Register/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import AboutPage from '../AboutPage/Loadable';
import ContactPage from '../ContactPage/Loadable';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AddUser from '../User/Add';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  .btn {
    line-height: 0;
  }
`;

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/users/add" component={AddUser} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
