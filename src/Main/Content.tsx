import './Style/Content.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../route-config'
import configureValidations from '../Validations';

configureValidations();

function Content() {

    const [loading, setLoading] = useState(false);

    return (
        <div className="container">
            <div className="custon-container">
                <div className="form-container"> 
                    {
                        <Switch>
                            {
                            routes.map( route => 
                                <Route key={route.path} path={route.path} exact={route.exact}>
                                    <route.component />
                                </Route>)
                            }
                        </Switch>                 
                    }
                </div>
            </div>
        </div>
    )
}

export default Content;
