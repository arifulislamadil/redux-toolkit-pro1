import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topheader from './header/Topheader';
import Home from './pages/Home';
import Services from './components/services/Services';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Topheader/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
