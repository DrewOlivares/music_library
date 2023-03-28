import { useEffect, useRef, useState } from 'react'
import { SearchBar } from './components/searchBar'
import { Wrapper } from './components/wrapper'
import { DataContext } from './context/dataContext'
import { SearchContext } from './context/searchContext'

function App(){
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])
    let inputRef = useRef();
    // useRef(1) returns { current: 1 }

    const fetchData = () => {
        document.title = inputRef.current.value + ' Music'
        fetch(`https://itunes.apple.com/search?term=${inputRef.current.value}`)
        .then(response => response.json())
        .then(({resultCount, results}) => {
            setMessage(`Successfully fetched ${resultCount} result(s)!`)
            setData(results)
        })
    }

    return (
        <div>
            <SearchContext.Provider value={{ref: inputRef, fetchData}}>
            <SearchBar />
            </SearchContext.Provider>
            {message}
            <DataContext.Provider value={data}>
            <Wrapper/>
            </DataContext.Provider>
        </div>
    )
}

export default App
