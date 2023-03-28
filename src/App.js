import { useEffect, useState, useRef } from 'react'
import { Gallery } from './components/gallery'
import { SearchBar } from './components/searchBar'
import { Wrapper } from './components/wrapper'
import { DataContext } from './context/dataContext'
import { SearchContext } from './context/searchContext'
import { ArtistView } from './components/artistView'
import { AlbumView } from './components/albumView'
import { Nav } from './components/nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


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
            {message}
            <Router>
            <Nav />
                <Routes>
                    <Route path="/" element={
                    <>
                        <SearchContext.Provider value={{ref: inputRef, fetchData}}>
                            <SearchBar />
                        </SearchContext.Provider>
                        <DataContext.Provider value={data}>
                            <Wrapper/>
                        </DataContext.Provider>
                    </>
                    } />
                        <Route path="/album/:id" element={<AlbumView/>} />
                        <Route path="/artist/:id" element={<ArtistView/>} />
                        </Routes>
            </Router>

        </div>
    )
}

export default App
