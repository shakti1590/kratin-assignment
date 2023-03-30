import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bmi from './components/Bmi/Bmi';
import Diet from './components/Diet/Diet';
import Entertainment from './components/Entertainment/Entertainment';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Yoga from './components/Yoga/Yoga';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/entertainment" element={<Entertainment />} />
        <Route exact path="/diet" element={<Diet />} />
        <Route exact path="/yoga" element={<Yoga />} />
        <Route exact path="/bmi" element={<Bmi />} />
      </Routes>
    </>
  );
}

export default App;
