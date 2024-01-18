
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
  <Navbar title="TextBaba"/>
  <div className="container my-3">

  <TextForm heading = "Enter Your text to analyze"/>
  </div>
    </>
  );
}

export default App;
