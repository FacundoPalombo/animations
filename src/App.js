import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles.css'
import './App.scss'
import { Home } from './pages/home'
import { Standard } from './pages/standard'
import { JsApi } from './pages/jsapi'
import { Dashboard } from './pages/dashboard'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/standard'>
          <Standard />
        </Route>
        <Route path='/jsapi'>
          <JsApi />
        </Route>
        <Route default>
          <Home />
        </Route>
      </Switch>

    </BrowserRouter>
  )
}
