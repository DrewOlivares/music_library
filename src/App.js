import { useEffect, useState } from 'react'
import { Gallery } from './components/gallery'
import { SearchBar } from './components/searchBar'
import { ThemeContext } from './contexts/themeContext'

function App(){
    let [search, setSearch] = useState('the grateful dead')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])
    let [darkMode, setDarkMode] = useState(true)

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
        <div>
            <ThemeContext.Provider value={{darkMode, setDarkMode}}>
                <SearchBar setSearch={setSearch} />
                {message}
                <Gallery data={data} />
            </ThemeContext.Provider>
        </div>
    )
}

export default App
