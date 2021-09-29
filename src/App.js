import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewUser from './components/ViewUser';

function App() {
  return (
    <div> 
      <Router> 
          <Header />
            <div className="container">
            <Switch> local
              <Route path = "/" exact component= {EmployeeList}></Route>
              <Route path = "/employees" component= {EmployeeList}></Route>
              <Route path = "/add-employee" component= {CreateEmployee}></Route>
              <Route path = "/update-employee/:id" component= {UpdateEmployee}></Route>
              <Route path = "/view-user/:id" component= {ViewUser}></Route>
              {/* <EmployeeList /> */}
            </Switch>
            </div>
          <Footer />
      </Router> 
    </div>

  );
}

export default App;
