import "../styles/FeaturedMovie.scss";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const FeaturedMovie = ({ item }) => {
  let featuredYear = new Date(item.first_air_date);

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className='featured'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className='featuredShadowVertical'>
        <div className='featuredShadowHorizontal'>
          <div className='featuredName'>
            <h1>{item.original_name}</h1>
          </div>
          <div className='featuredInfo'>
            <div className='points'>
              <span>{item.vote_average} pontos</span>
            </div>
            <div className='year'>
              <span>{featuredYear.getFullYear()}</span>
            </div>
            <div className='seasons'>
              <span>
                {item.number_of_seasons} temporada
                {item.number_of_seasons !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
          <div className='featuredDescription'>
            <span>{item.overview}</span>
          </div>
          <div className='featuredButtons'>
            <a href='#' className='watchBtn'>
              <FaPlay />
              Assistir
            </a>
            <a href='#' className='myListBtn'>
              <FaPlus />
              Minha Lista
            </a>
          </div>
          <div className='featuredGenres'>
            <span>
              <strong>Gêneros: </strong> {genres.join(", ")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
