import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';

function App() {
  return (
    <>
      <NavBar/>
      <div className="App">
        <Home/>
      </div>
    </>
  );
}

export default App;
