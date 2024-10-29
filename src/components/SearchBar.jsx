import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './SearchBar.module.css'
import { useQuery } from '../context/SearchContext'

function SearchBar({setIsSearchClicked}) {
  const {query, setQuery} = useQuery()
  const inputRef = useRef(null)

  useEffect(function() {
    inputRef.current.focus()
  },[])

    function handleClick() {
        setIsSearchClicked(false)
    }

  return (
    <div className={styles.searchBar} data-aos="fade-right">
        <input type='text' ref={inputRef} onChange={(e) => setQuery(e.target.value)} value={query}/>
        <FaSearch size={'15px'} color='#000' onClick={handleClick}/>
    </div>
  )
}

export default SearchBar