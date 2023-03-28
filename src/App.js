import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Gallery } from './components/gallery'
import { SearchBar } from './components/searchBar'
import { ArtistView } from './components/artistView'
import { AlbumView } from './components/albumView'


function App(){
    let [search, setSearch] = useState('the grateful dead')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://itunes.apple.com/search?term=${search}`)
        .then(response => response.json())
        .then(({resultCount, results}) => {
            setMessage(`Successfully fetched ${resultCount} result(s)!`)
            setData(results)
            console.log(results)
        })
    }, [search])

    return (
        <Router>
            <div>
                <SearchBar setSearch={setSearch} />
                {message}
                <Gallery data={data} />

            </div>
        </Router>
    )
}

export default App
