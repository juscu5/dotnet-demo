import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListPageComponent from './pages/ListPageComponent';
import NewFormPageComponent from './pages/NewFormPageComponent';
import EditFormPageComponent from './pages/EditFormPageComponent';
import HomePageComponent from './pages/HomePageComponent';


function App() {
  return (
    <div className="App">
      <Router> 
              <div className="container">
                  <Switch>
                    <Route  path="/" exact component={HomePageComponent}/>
                    <Route  path="/list" exact component={ListPageComponent}/>
                    <Route  path="/Add" component={NewFormPageComponent}/> 
                    <Route  path="/Edit/:nid" component={EditFormPageComponent}/> 
                  </Switch>
              </div> 
      </Router>


    </div>
  );
}

export default App;
