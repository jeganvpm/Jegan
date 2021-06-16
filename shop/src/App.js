import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './container/Header';
import ProductListing from './container/ProductListing';
import ProductDetails from './container/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
      <Route path="/" exact component={ProductListing} />
      <Route path="/product/:productId" exact component={ProductDetails}/>
      <Route>404 Found</Route>
      </Switch>
     </Router>
     </div>
  );
}

export default App;


