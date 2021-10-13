import './App.css';
import Menu from './Menu';
import Content from './Content';
import Footer from './Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './route-config'
import configureValidations from './Validations';


configureValidations();

function App() {
  
  return (
    <BrowserRouter>
      <Menu />
      <Content/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
