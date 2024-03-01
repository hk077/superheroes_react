import React from 'react'
import { useSearch } from '../../contexts'

const SearchForm = () => {

    const { inputValue, setInputValue, setSearchString } = useSearch()

    const handleInput = e => {
        const newInput = e.target.value
        setInputValue(newInput)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setSearchString(inputValue)
        setInputValue('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} required />
        <input className="submit-btn" type="submit" value="Search"/>
    </form>
  )
}

export default SearchForm