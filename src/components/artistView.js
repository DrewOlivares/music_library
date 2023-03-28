// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export function ArtistView() {
    const [albums, setAlbums] = useState([])
    const [ artistData, setArtistData ] = useState({})
    const { id } = useParams()

    useEffect(() => {
            fetch(`http://localhost:4000/album/${id}`)
            .then(response => response.json())
            .then (({ results }) => { 
                setArtistData(results.shift())
                setAlbums(results)
            })
    }, [id])

    return (
        <div>
            <h1>
                {artistData.artistName}
            </h1>
            <h2>
                {artistData.primaryGenreName}
            </h2>
            <ul>
                {albums.map((album) => (
                    
                     <li key={album.collectionId}>
                        <Link to={`/album/${album.collectionId}`} >
                            {album.collectionName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}


