import React, { createContext, useContext, useState } from 'react'


const QueryContext = createContext()

function SearchContext({children}) {
    const [query, setQuery] = useState('')
  return (
    <QueryContext.Provider value={{
        query, setQuery
    }}>
        {children}
    </QueryContext.Provider>
  )
}

export function useQuery() {
    const context = useContext(QueryContext)

    if(context === undefined) throw new Error ('QueryContext was used outside the QueryProvider')

    return context
}

export default SearchContext