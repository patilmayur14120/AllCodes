
import './App.css';
// import './Home.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {BrowserRouter,Routes,Route,NavLink,Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        Employee CRUD
      </h3>
      <nav className="navbar navbar-expand-sm  navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/">
                  Home
              </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/department">
                  Department
              </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/employee">
                  Employee
              </NavLink>
          </li>
        </ul>
      </nav>

     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/employee' element={<Employee/>}/>
        </Routes>
      
     
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;
