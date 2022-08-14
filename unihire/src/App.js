import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body/Body';
import Info from './components/Info/Info';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Body/>} />
        <Route exact path='info' element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
