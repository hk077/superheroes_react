import React, {useState, useContext, createContext} from 'react'

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
    const [heroData, setHeroData] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [searchString, setSearchString] = useState('')

    return (
        <SearchContext.Provider value={{heroData, setHeroData, inputValue, setInputValue, searchString, setSearchString}}>
            {children}
        </SearchContext.Provider>
    )
} 

export const useSearch = () => useContext(SearchContext)