import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Add from "./components/Add";
import ContactList from './components/ContactList';
import {Button} from "semantic-ui-react";
import { toggleFalse } from './JS/actions/edit';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch= useDispatch()
  return (
    <div className="App">
      <h2> workshop MERN </h2>
      <Button inverted color="blue" onClick={()=>dispatch(toggleFalse())}>
        <Link to="/add">Add Contact</Link>
      </Button>
      <Button inverted color="blue">
        <Link to="/">Contact List</Link>
      </Button>
      <Switch>
        <Route exact path="/" component={ContactList}/>
        <Route path={["/add","/edit/:id"]} component={Add}/>
      </Switch>
    </div>
  );
}

export default App;
