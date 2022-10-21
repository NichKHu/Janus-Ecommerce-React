import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Collection from './components/Collection/Collection';
import End from './components/End/End';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Collection />
      <End />
    </div>
  );
}

export default App;
