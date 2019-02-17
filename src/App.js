import React, { Component } from 'react';

import NavBar from './components/NavBar'
import Page404 from "./components/Page404"
import Home from "./components/Home"
import UndevelopedPage from "./components/UndevelopedPage"

import OpenDay from './container/OpenDay'
import List from './container/List';

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


import { BrowserRouter, Route, Switch } from "react-router-dom"

const HeaderLinks = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`

const StyledHeaderLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f8f9fa
  color: #333333

  &.active{
    border-bottom: 2px solid #bfbfbf;
  }

  &:hover {
    text-decoration:none;
    color: black
}
`

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <NavBar brand="Meet Mindera"/>
          <Switch>
            <Route exact path="/" component = {HomeComponent} />
            <Route exact path="/vacancies" component = {VacanciesComponent} />
            <Route exact path="/graduateprogram" component = {UndevelopedPage} />
            <Route exact path="/openday/day:day_id" component = {OpenDay} />
            <Route exact path="/openday/day:day_id/list:list_id" component = {List} />
            
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const Header = () =>(
  <HeaderLinks>
    <StyledHeaderLink exact to="/" activeClassName="active">Events</StyledHeaderLink>
    <StyledHeaderLink to="/vacancies">Vacancies</StyledHeaderLink>
  </HeaderLinks>
)

const HomeComponent = () =>(
  <React.Fragment>
    <Header />
    <Home />
  </React.Fragment>
)

const VacanciesComponent = () => (
  <React.Fragment>
    <Header />
    <UndevelopedPage />
  </React.Fragment>
)

export default App;
