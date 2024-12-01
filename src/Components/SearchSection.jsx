// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../Styles/searchsection.css"

function SearchSection() {
  return (
    <section className="search-section">
    <div className="search-bar">
      <input type="text" placeholder="Keyword"/>
      <select>
        <option>Category</option>
        <option>IT</option>
        <option>Marketing</option>
      </select>
      <select>
        <option>Location</option>
        <option>Remote</option>
        <option>Delhi</option>
      </select>
      <button className="btn search-btn">Search</button>
    </div>
  </section>
  )
}

export default SearchSection
