const Player = ({ preview }) => (
  <div className="player">
    <audio controls src={preview}>
      Seu navegador não suporta o elemento de áudio.
    </audio>
  </div>
);

export default Player;
