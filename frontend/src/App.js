import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Navbar from './common/NavBar'
import cityCard from './cities/cityCard'
import Profile from './users/Profile'

const App = () => (

  <BrowserRouter>
    
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cities/:id" component={cityCard} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </main> 

  </BrowserRouter>

)

export default App
