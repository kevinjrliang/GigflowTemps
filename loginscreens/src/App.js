import './App.css';
import LoginScreen from './components/LoginScreen';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container>
        <LoginScreen />
      </Container>
    </div>
  );
}

export default App;
