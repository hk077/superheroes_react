import React, { useEffect, useState } from 'react'
import { HeroCard, HeroList, SearchForm } from '../'
import { useSearch } from '../../contexts'

const SearchWidget = () => {
    const { searchString, setHeroData } = useSearch()
    const [allHeroes, setAllHeroes] = useState([])
    const [filteredHeroes, setFilteredHeroes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
            const data = await response.json()
            setAllHeroes(data)
            setFilteredHeroes(filterHeroes(data, searchString))
        }

        fetchData()
    }, [searchString])

    const filterHeroes = (heroes, searchString) => {
        return heroes.filter(hero => hero.name.toLowerCase().includes(searchString.toLowerCase()))
    }


    return (
        <>
            <SearchForm />
            <HeroList heroes={filteredHeroes} />
        </>
    )
}

export default SearchWidget
