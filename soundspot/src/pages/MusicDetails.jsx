import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Player from '../components/Player';
import '../styles/components.css';

const MusicDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [musica, setMusica] = useState(null);

  useEffect(() => {
  axios.get(`https://deezerdevs-deezer.p.rapidapi.com/track/${id}`, {
    headers: {
      'X-RapidAPI-Key': '1e1331b69emshb393b4302882b47p1b29f8jsn9cef14637710',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  })
    .then(res => setMusica(res.data))
    .catch(err => console.error(err));
}, [id]);


  if (!musica) return <p>Carregando ou música não encontrada...</p>;


  return (
    <section className="container">
      <div className="card detail-card">
        <button className="back" onClick={() => navigate(-1)}>←</button>
        <h1>Músicas</h1>
        <div className="detail-content">
          <img src={musica.album.cover_medium} alt="Capa" />
          <div>
            <h2>{musica.title}</h2>
            <p><strong>Artista:</strong> {musica.artist.name}</p>
            <p><strong>Álbum:</strong> {musica.album.title}</p>
          </div>
        </div>
        <Player preview={musica.preview} />
      </div>
    </section>
  );
};

export default MusicDetails;
