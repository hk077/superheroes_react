import React, { useEffect, useState } from "react"
import { GalleryImage } from "../"
import { Link } from "react-router-dom"

const HeroGallery = () => {
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        const displayHeroes = async () => {
            const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
            const data = await response.json()
            setHeroes(data)
        }

        displayHeroes()
    }, [])

  return (
    <div className="heroes">
        {heroes.map(hero => (
            <Link to={`/heroes/${hero.id}`} key={hero.id}>
            <GalleryImage hero={hero} />
            </Link>
        ))}
    </div>
  )
}

export default HeroGallery

