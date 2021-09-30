import './App.css';
import Menu from './Menu';
import Footer from './Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './route-config'
import configureValidations from './Validations';


configureValidations();

function App() {
  

  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <div className="custon-container">
          <Switch>
            {routes.map(route => 
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component />
            </Route>)}
          </Switch>
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
