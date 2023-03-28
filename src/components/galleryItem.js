import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

export function GalleryItem({song}){
    const [isExpanded, setIsExpanded] = useState(false);
    const {
        trackName,
        collectionName,
        artistName,
        primaryGenreName,
        releaseDate,
        artworkUrl100,
        artistId,
        collectionId
    } = song

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'black'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{trackName}</h3>
                <h4>{artistName}</h4>
            </div>
        )
    }
    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{trackName}</h2>
                <h3>
                    <Link to={`/artist/${artistId}`}>
                        {artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/album/${collectionId}`}>
                        {collectionName}
                    </Link>
                </h3>
                <h4>{primaryGenreName}</h4>
                <h4>{releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setIsExpanded(!isExpanded)}
        style={{'display': 'inline-block'}}>
        
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {isExpanded ? detailView() : simpleView()}
    
        </div>
    )
}
