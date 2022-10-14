import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Employees from './components/Employees';
import Home from './components/Home';

function App() {

  return (
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/employees' exact element={<Employees />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
