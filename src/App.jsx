import './App.css';
import Calculator from './components/Calculator';
import logo from "./assets/logo.svg";

function App() {
  return (
   <div className="app">
    <img src={logo} alt="tip calculator app logo" />
    <Calculator />
   </div>
      
  )
}

export default App
