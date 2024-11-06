
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Arcanist from './pages/Arcanist';
import Home from './pages/Home';
import Leaks from './pages/Leaks';
import ArcanistInfo from './pages/ArcanistInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact = {true} Component={Home}/>
          <Route path="/arcanist" Component={Arcanist}/>
          <Route path="/leaks" Component={Leaks}/>
          <Route path="/arcanist/:arcanistName" Component={ArcanistInfo}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
