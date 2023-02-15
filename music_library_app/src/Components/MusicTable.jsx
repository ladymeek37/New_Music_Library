import React from 'react';
import "./MusicTable.css"

// Takes in a single post object from SongMapper as props

const MusicTable = ({songs}) => {
    return ( 
        <table width = "50%" height = "50%" >
            <p>SAVED SONGS</p>
            <tr>
                <th>TITLE</th>
                <th>ARTIST</th> 
                <th>ALBUM</th>
                <th>RELEASE DATE</th>
                <th>GENRE</th>
            </tr>
            {songs.map((song) => {
                return(
                    <tr key={song.id}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.release_date}</td>
                    <td>{song.genre}</td>
                    </tr>
                )
            })}
        </table>
    );
}

export default MusicTable;