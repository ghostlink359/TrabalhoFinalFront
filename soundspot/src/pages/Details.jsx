import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Details() {
  const { id } = useParams();
  const [musica, setMusica] = useState(null);

  useEffect(() => {
    axios.get(`https://corsproxy.io/?https://api.deezer.com/track/${id}`)
      .then(response => {
        setMusica(response.data);
      })
      .catch(error => console.error('Erro ao buscar detalhes:', error));
  }, [id]);

  if (!musica) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{musica.title}</h2>
      <p>Artista: {musica.artist.name}</p>
      <p>Álbum: {musica.album.title}</p>
      <img src={musica.album.cover_medium} alt="Capa" />
      <audio controls src={musica.preview}>
        Seu navegador não suporta o player de áudio.
      </audio>
    </div>
  );
}

export default Details;