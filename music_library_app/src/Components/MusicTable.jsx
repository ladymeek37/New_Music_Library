import React from 'react';

// Takes in a single post object from SongMapper as props

const MusicTable = ({songs}) => {
    return ( 
        <table>
            <tr>
                <th>TITLE</th>
                <th>ARTIST</th> 
                <th>ALBUM</th>
                <th>RELEASE DATE</th>
                <th>GENRE</th>
            </tr>
            <tr>
                <td>{songs.map((el, index) => <div key = {index} >{el.title}</div>)}</td>
                <td>{songs.map((el, index) => <div key = {index} >{el.artist}</div>)}</td>
                <td>{songs.map((el, index) => <div key = {index} >{el.album}</div>)}</td>
                <td>{songs.map((el, index) => <div key = {index} >{el.releaseDate}</div>)}</td>
                <td>{songs.map((el, index) => <div key = {index} >{el.genre}</div>)}</td>    
            </tr>
        </table>
    );
}

export default MusicTable;