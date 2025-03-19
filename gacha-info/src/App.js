
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Arcanist from './pages/Arcanist';
import Home from './pages/Home';
import Leaks from './pages/Leaks';
import ArcanistInfo from './pages/ArcanistInfo';
import { ArcanistProvider } from './context/ArcanistContext';


function App() {
  const location = useLocation();

  return (
    <div className="App">
        {/* <NavBar /> */}
        {location.pathname !== "/" && <NavBar />}
        <ArcanistProvider>
          <Routes>
            <Route path="/" exact={true} Component={Home} />
            <Route path="/leaks" Component={Leaks} />
            <Route path="/arcanist" Component={Arcanist} />
            <Route path="/arcanist/:arcanistName" Component={ArcanistInfo}></Route>
          </Routes>
        </ArcanistProvider>

    </div>
  );
}

export default App;
