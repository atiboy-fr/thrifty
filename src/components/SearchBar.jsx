import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './SearchBar.module.css'
import { useQuery } from '../context/SearchContext'
import { useNavigate } from 'react-router-dom'

function SearchBar({setIsSearchClicked}) {
  const {query, setQuery} = useQuery()
  const navigate = useNavigate()
  const inputRef = useRef(null)

  useEffect(function() {
    inputRef.current.focus()
  },[])

    function handleClick() {
        setIsSearchClicked(false)
      if(query.length > 0) navigate('/shop')
    }

  return (
    <div className={styles.searchBar} data-aos="fade-right">
        <input type='text' ref={inputRef} onChange={(e) => setQuery(e.target.value)} value={query}/>
        <FaSearch size={'15px'} color='#000' onClick={handleClick}/>
    </div>
  )
}

export default SearchBar