import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Navbar from './common/NavBar'
import cityCard from './cities/cityCard'

const App = () => (

  <BrowserRouter>
    
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cities/:id" component={cityCard} />
      </Switch>
    </main> 

  </BrowserRouter>

)

export default App
