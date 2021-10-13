import './App.css';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Ngenilife  from './components/ngeni-life';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Ngenilife />
     </div>
  </BrowserRouter>
  );
}
export default App;
