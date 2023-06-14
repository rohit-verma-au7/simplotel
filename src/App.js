import './App.css';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Navbar from './pages/navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Order />
    </div>
  );
}

export default App;
