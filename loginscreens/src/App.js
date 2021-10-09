import './App.css';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from "./components/SignUpScreen";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import EmailLogin from "./components/EmailLogin";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Container>
              <Switch>
                  <Route exact path="/">
                      <Route component={LoginScreen} />
                  </Route>
                  <Route path="/SignUpScreen">
                      <Route component={SignUpScreen} />
                  </Route>
                  <Route path="/EmailLogin">
                      <Route component={EmailLogin} />
                  </Route>
              </Switch>
          </Container>
        </div>
      </BrowserRouter>
  );
}

export default App;
