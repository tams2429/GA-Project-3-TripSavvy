import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/NavBar'

const App = () => (

  <BrowserRouter>
    <Navbar />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main> 
  </BrowserRouter>

)

export default App
