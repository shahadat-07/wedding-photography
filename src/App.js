import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Home/Login/Login';
import { createContext, useState } from 'react';
import OrderList from './components/Dashboard/OrderList/OrderList';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ManageService from './components/Dashboard/ManageService/ManageService';
import AddReview from './components/Dashboard/AddReview/AddReview';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/orderList">
            <OrderList/>
          </Route>
          <Route path="/addService">
            <AddService/>
          </Route>
          <Route path="/addReview">
            <AddReview/>
          </Route>
          <Route path="/admin">
            <AddReview/>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin/>
          </Route>
          <Route path="/manageService">
            <ManageService/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
