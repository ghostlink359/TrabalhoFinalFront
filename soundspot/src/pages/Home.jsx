import { useNavigate } from 'react-router-dom';
import '../styles/components.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home-description">
      <div className="card">
        <h1>Início</h1>
        <p> SoundSpot é um app de música desenvolvido com ReactJS que consome a API do Deezer via RapidAPI.
            O objetivo é permitir que o usuário pesquise por um artista e visualize as músicas mais populares dele, de forma simples e direta.

            Na primeira exibição, o app carrega automaticamente as faixas da banda Decapitated.
            A partir disso, o usuário pode utilizar a barra de busca para pesquisar qualquer outro artista.
            As músicas aparecem em cards com nome, capa e álbum — e ao clicar em uma delas, é possível ver mais detalhes e ouvir uma prévia de 30 segundos direto pelo app.

            O projeto utiliza rotas para navegação entre páginas, Axios para comunicação com a API, e uma interface escura com tons de roxo e preto, focando em uma estética moderna e funcional.

        </p>
        <button onClick={() => navigate('/musicas')}>Ver Músicas</button>
      </div>
    </section>
  );
};

export default Home;
