import { GalleryItem } from './galleryItem'

export function Gallery({data}){
    const songs = data.filter((result) => result.kind === "song")



    return (
        <div>
            {songs.map((song)=> < GalleryItem song={song} key={song.trackId} />)}

        </div>
    )
}

