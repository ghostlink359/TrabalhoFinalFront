import React from 'react';
import { Link } from 'react-router-dom';

function MusicCard({ musica }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{musica.title}</h3>
      <p>Artista: {musica.artist.name}</p>
      <img src={musica.album.cover_small} alt="Capa do álbum" />
      <br />
      <Link to={`/musica/${musica.id}`}>Ver detalhes</Link>
    </div>
  );
}

export default MusicCard;