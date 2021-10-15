import React from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import Form from './components/Form'
import TableForm from './components/TableForm';
import UpdateForm from './components/updateForm'
import ("./App.css")
const App = () => {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Form}/>
      <Route exact path="/list" component={TableForm}/>
      <Route exact path="/update" component={UpdateForm}/>
    </Switch>
    </Router>
  )
}

export default App
