import './Content.css';
import { useState, useEffect } from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../route-config'
import configureValidations from '../Validations';
import Spinner from '../utils/Spinner';


configureValidations();

function Content() {

    const [loading, setLoading] = useState(false);

 /*   useEffect(() => {
        const timerId = setInterval(() => {
        setLoading(false)
        }, 10000);

        return () => clearInterval(timerId);
    })  */
  
  return (
    <div className="container">
        <div className="custon-container">
            <div className="form-container"> 
            {loading ?
                <Spinner/>
            :
                <Switch>
                    {routes.map(route => 
                    <Route key={route.path} path={route.path} exact={route.exact}>
                    <route.component />
                    </Route>)}
                </Switch>
                  
            }
        </div>
        </div>
  </div>
  )
}

export default Content;
