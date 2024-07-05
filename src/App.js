import Home from './pages/Home'
import Training from './pages/Training'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Training" element={<Training/>} />
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
