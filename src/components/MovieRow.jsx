import "../styles/MovieRow.scss";

import { useState } from "react";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listLength = items.results.length * 150;
    if (window.innerWidth - listLength > x) {
      x = window.innerWidth - listLength - 60;
    }
    setScrollX(x);
  };

  return (
    <div className='movieRow'>
      <h2>{title}</h2>
      <div className='listArea'>
        <div className='leftRow' onClick={handleLeftArrow}>
          <FaChevronLeft />
        </div>
        <div className='rightRow' onClick={handleRightArrow}>
          <FaChevronRight />
        </div>
        <div
          className='list'
          style={{ width: items.results.length * 150, marginLeft: scrollX }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className='item'>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
