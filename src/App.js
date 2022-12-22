import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import RegisterStudent from './components/RegisterStudent';
import UpdateStudent from './components/UpdateStudent';
import ListStudent from './components/ListStudent';

function App() {
  return (
    <div className="container">
      <Router>
          <Routes>
              <Route path='/register' element={<RegisterStudent/>}/>
              <Route path='/update' element={<UpdateStudent/>}/>
              <Route path='/' element={<ListStudent/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
