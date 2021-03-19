// import React
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import layouts

// import components

// import pages
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
// import styles
import './styles/globals.css';
// import contexts
import StoreContext from './contexts/StoreContext'


function App() {


  return (
    <StoreContext>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </BrowserRouter>
    </StoreContext>
  );
}

export default App;
