import { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Gallery } from './components/gallery'
import { SearchBar } from './components/searchBar'
import { ArtistView } from './components/artistView'
import { AlbumView } from './components/albumView'
import { Nav } from './components/nav'


function App(){
    let [search, setSearch] = useState('Breaking Benjamin')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://itunes.apple.com/search?term=${search}`)
        .then(response => response.json())
        .then(({resultCount, results}) => {
            setMessage(`Successfully fetched ${resultCount} result(s)!`)
            setData(results)
        })
    }, [search])

    return (
        <div>
            {message}
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={
                        <>
                            <SearchBar setSearch={setSearch} />
                            <Gallery data={data} />
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
