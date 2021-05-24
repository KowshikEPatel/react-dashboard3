
import './App.css';
import { BrowserRouter as Router,
        Switch,
      Route,
    Link } from "react-router-dom";

import Topbar from './components/Topbar'
import Dashboard from './components/Dashboard'
import UserList from './components/UserList'
import Product from './components/ProductList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'

function App() {
  return (
      <>
      <Router>
      <Topbar/>
      <div class="sidenav">
        <a><Link to="/">Home</Link></a>
        <a><Link to="/users">Users</Link></a>
        <a><Link to="/product">Product</Link></a>
      </div>
      <div className="main">
      <Switch>
           <Route exact path="/"><Dashboard/></Route>
           <Route exact path="/users"><UserList/></Route>
           <Route exact path="/product"><Product/></Route>
       </Switch>
      </div>
      </Router>
      </>
  );
}

export default App;

