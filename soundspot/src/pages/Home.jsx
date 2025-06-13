import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicCard from '../components/MusicCard';

function Home() {
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
      axios.get('https://deezerdevs-deezer.p.rapidapi.com/search', {
        params: { q: 'Decapitated' },
        headers: {
          'X-RapidAPI-Key': '1e1331b69emshb393b4302882b47p1b29f8jsn9cef14637710',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      })
      .then(response => {
        setMusicas(response.data.data);
      })
      .catch(error => console.error('Erro ao buscar músicas:', error));
  }, []);

  return (
    <div>
      <h1>Músicas Populares</h1>
      {musicas.map(musica => (
        <MusicCard key={musica.id} musica={musica} />
      ))}
    </div>
  );
}

export default Home;