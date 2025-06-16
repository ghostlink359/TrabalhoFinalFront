import { useEffect, useState } from 'react';
import axios from 'axios';
import MusicCard from '../components/MusicCard';
import '../styles/components.css';

const MusicList = () => {
  const [musicas, setMusicas] = useState([]);
  const [busca, setBusca] = useState('');
  const [artista, setArtista] = useState('Decapitated');

  useEffect(() => {
    const fetchMusicas = async () => {
      try {
        const res = await axios.get('https://deezerdevs-deezer.p.rapidapi.com/search', {
          params: { q: artista },
          headers: {
            'X-RapidAPI-Key': '1e1331b69emshb393b4302882b47p1b29f8jsn9cef14637710', 
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
          },
        });

        setMusicas(res.data.data || []);
      } catch (err) {
        console.error('Erro ao buscar músicas:', err);
        setMusicas([]);
      }
    };

    fetchMusicas();
  }, [artista]);

  return (
    <section className="container">
      <h1>Músicas</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Buscar artista"
          value={busca}
          onChange={e => setBusca(e.target.value)}
        />
        <button onClick={() => setArtista(busca)}>Buscar</button>
      </div>
      <div className="grid">
        {musicas.map((m) => (
          <MusicCard key={m.id} musica={m} />
        ))}
      </div>
    </section>
  );
};

export default MusicList;
