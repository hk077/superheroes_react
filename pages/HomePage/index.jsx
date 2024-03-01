import React, { useState, useEffect } from 'react';

function HomePage() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
        const response = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
        const data = await response.json();
        console.log(data)
        setHeroes(data);
      }

    fetchHeroes();
  }, []);

  return (
    <div className="home-page">
      <h1>Superheroes</h1>
      <ul>
        {heroes.map(hero => (
          <li key={hero.id}>
            <img src={hero.images.sm} />
            <h2>{hero.name}</h2>
            <p>{hero.work.occupation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
