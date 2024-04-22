import './App.css';
import Carousal from './Components/Carousal';
import Hero from './Components/Hero';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Carousal/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
