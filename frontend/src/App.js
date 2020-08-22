import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './common/NavBar'

const App = () => (

  <BrowserRouter>
    
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main> 

  </BrowserRouter>

)

export default App
