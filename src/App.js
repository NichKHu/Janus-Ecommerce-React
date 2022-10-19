import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Collection from './components/Collection/Collection';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Collection />
    </div>
  );
}

export default App;
