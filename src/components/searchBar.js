import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/searchContext'

export function SearchBar(props) {
    const {ref, fetchData} = useContext(SearchContext)


/*  this is to perform the search as we type
    useEffect(()=>{
        setSearch(query)

    }, [query]) */

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData()
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={ref}/>
            <input type="submit" value="search" />
        </form>
    )
}


    