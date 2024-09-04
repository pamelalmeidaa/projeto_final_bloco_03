import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './assets/pages/home/Home';
import Footer from './assets/components/footer/Footer';
import Navbar from './assets/components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
