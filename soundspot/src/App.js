import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MusicList from './pages/MusicList';
import MusicDetails from './pages/MusicDetails';
import './App.css';
import './styles/components.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musicas" element={<MusicList />} />
        <Route path="/musicas/:id" element={<MusicDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
