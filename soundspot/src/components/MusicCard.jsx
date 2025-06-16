import { useNavigate } from 'react-router-dom';
import '../styles/components.css';

const MusicCard = ({ musica }) => {
  const navigate = useNavigate();

  return (
    <div className="music-card">
      <img src={musica.album.cover_medium} alt="Capa" />
      <p>{musica.title}</p>
      <p>{musica.artist.name}</p>
      <button onClick={() => navigate(`/musicas/${musica.id}`)}>Ver Detalhes</button>
    </div>
  );
};

export default MusicCard;
