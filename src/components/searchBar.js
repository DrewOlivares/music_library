import { useEffect, useState } from 'react'

export function SearchBar({setSearch}) {
    
    let [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

/*  this is to perform the search as we type
    useEffect(()=>{
        setSearch(query)

    }, [query]) */

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(query)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange}/>
            <input type="submit" value="search" />
        </form>
    )
}


    