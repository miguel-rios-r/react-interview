import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../screens/home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route exact path="/login" component={Login}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
