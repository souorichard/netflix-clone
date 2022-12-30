import "./styles/App.scss";

import { useEffect, useState } from "react";

import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import tmdb from "./data/tmdb";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //Total List
      let list = await tmdb.getHomeList();
      setMovieList(list);

      //Featured Movie
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 0) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  return (
    <div className='page'>
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com{" "}
        <span role='img' aria-label='coração'>
          ❤
        </span>{" "}
        por Richard Rodrigues
        <br />
        Direitos de Imagem <strong>Netflix</strong>
        <br />
        Dados do site TheMovieDB.org
      </footer>
    </div>
  );
};

export default App;
