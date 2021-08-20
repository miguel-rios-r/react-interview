import Home from '../screens/home';
import Login from '../screens/login'
import { useSelector } from 'react-redux';

const App = () => {
  const { username } = useSelector((state) => state.user)
  console.log('USER>>>>', username);
  return username ? <Home/> : <Login/>

}

export default App;
