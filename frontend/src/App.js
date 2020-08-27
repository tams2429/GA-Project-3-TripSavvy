import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Navbar from './common/NavBar'
import cityCard from './cities/cityCard'
import Profile from './users/Profile'
import Register from './auth/Register'
import Login from './auth/Login'
import CreateCity from './cities/CreateCity'
import EditCity from './cities/EditCity'
import Splash from './common/Splash'

const App = () => (
   
  <BrowserRouter>   
    
    <main>
      <Navbar />          
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cities/:id/edit" component={EditCity} />
        <Route path="/cities/:id" component={cityCard} />     
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/createcity" component={CreateCity} />
        <Route path="/splash" component={Splash} />
      </Switch>
    </main> 

  </BrowserRouter>

)

export default App
