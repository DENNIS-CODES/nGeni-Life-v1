import './App.css';
import { Route } from 'react-router-dom'
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Route path="/Footer" component={Footer}></Route>
     </div>
  );
}

export default App;
