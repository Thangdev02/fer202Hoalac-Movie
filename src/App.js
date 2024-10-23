// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
