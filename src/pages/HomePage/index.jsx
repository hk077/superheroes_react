import { Link } from "react-router-dom"
import React from "react"

const linkStyle = {
  color: "#5743A6"
}

const HomePage = () => {
  return (
  <>
  <h1>Top Heroes</h1>
  <em>All about the Superheroes</em>
  <ul>
    <li>
      <Link to="heroes" style={linkStyle}>Check out our Heroes</Link>
    </li>
    <li>
    <Link to="search" style={linkStyle}>Search for your favourite Hero</Link>
    </li>
  </ul>
  </>
  )
}

export default HomePage
