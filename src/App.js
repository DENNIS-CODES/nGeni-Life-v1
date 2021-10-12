import './App.css';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Ngenilife  from './components/ngeni-life';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <header className="header">
        <div className="header-links">
          <Link to="/ngenilife">nGeni Life</Link>
        </div>
      </header>
      <Ngenilife />
     </div>
  </BrowserRouter>
  );
}
export default App;
