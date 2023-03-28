import { useContext } from 'react'
import { DataContext } from '../context/dataContext'
import { GalleryItem } from './galleryItem'

export function Gallery(props){

    const data = useContext(DataContext)
    const songs = data.filter((result) => result.kind === "song")



    return (
        <div>
            {songs.map((song)=> < GalleryItem song={song} key={song.trackId} />)}

        </div>
    )
}