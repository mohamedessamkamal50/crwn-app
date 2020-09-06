import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';
 
import HomePage from './pages/homepages/homepage.component';

const HatePage = (props) => {
  console.log(props);
  return(<div>
    <h1>Hate Page</h1>
  </div>
  )
};

function App() {
  return (
    <div >
      <Switch>
      <Route exact path='/' component ={HomePage} />
      <Route  path='/hats' component ={HatePage} />
      </Switch>
    </div>
  );
}

export default App;
