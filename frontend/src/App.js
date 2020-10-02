import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Notifications from 'react-notify-toast'

import Home from './Home'
import Navbar from './common/NavBar'
import cityCard from './cities/cityCard'
import Profile from './users/Profile'
import EditProfile from './auth/EditProfile'
import Register from './auth/Register'
import Login from './auth/Login'
import CreateCity from './cities/CreateCity'
import EditCity from './cities/EditCity'
import Splash from './common/Splash'
import ErrorPage from './common/ErrorPage'

const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Notifications />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/cities/:id/edit" component={EditCity} />
        <Route path="/cities/:id" component={cityCard} />
        <Route path="/profile/edit" component={EditProfile} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/createcity" component={CreateCity} />
        <Route path="/home" component={Home} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </main>
  </BrowserRouter>
)

export default App
