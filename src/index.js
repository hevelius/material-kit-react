import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router'
import { ThemeProvider } from 'styled-components'

import indexRoutes from 'routes/index.jsx'

import 'assets/scss/material-kit-react.css?v=1.1.0'
import { main } from 'themes'

var hist = createBrowserHistory()

ReactDOM.render(
  <ThemeProvider theme={main}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} key={key} component={prop.component} />
        })}
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)
