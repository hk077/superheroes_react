import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { HeroCard } from "../../components"

const HeroPage = () => {
  const [hero, setHero] = useState({images: {}})
  const {id} = useParams()

  useEffect(() => {
    const displayHero = async () => {
        const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
        const data = await response.json()
        setHero(data)
    }

    displayHero()
}, [])

  return <HeroCard hero={hero}/>
}

export default HeroPage
