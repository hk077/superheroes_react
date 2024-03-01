import React from 'react'
import HeroCard from '../HeroCard'
import { useSearch } from '../../contexts'

const HeroList = () => {
  const { heroData } = useSearch()
  

  return (
    <div className='hero-list'>
      {heroData.map(h => 
    h.images ? <HeroCard key={h.id} hero={h} /> : ''
)}
</div>
  )
}

export default HeroList