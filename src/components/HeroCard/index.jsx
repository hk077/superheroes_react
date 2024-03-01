import React from 'react'

const HeroCard = ({hero}) => {
  return (
    <div className='hero-card'>
        <div>
        <img src={hero.images.sm} />
            </div>
            <div>
                <h2>{hero.name}</h2>
                {hero.work && hero.work.occupation && <p>{hero.work.occupation}</p>}
        </div>
    </div>
  )
}

export default HeroCard