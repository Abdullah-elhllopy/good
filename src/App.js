import './app.scss'

import Navbar from './components/header/navbar';
import Main from './components/main';
import Good from './components/list/list';
import Details from './components/detail/detail';
import { Provider } from 'react-redux';
import store from './store/store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './history';
function App() {
  return (
  <Provider store = {store} >
     
      <div className="App">
        <Navbar/>
        
            
            <Main/>
            <Good/>
            <Details/>
       
      </div>

      
    </Provider>
  );
}

export default App;
