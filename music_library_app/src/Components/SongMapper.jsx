import React from 'react';
import MusicTable from './MusicTable';

// Takes in the array as props from App

const SongMapper = (props) => {
    return ( 
        <ol>
            {props.songs.map(el => <li>{el.name}</li>)}
        </ol>
     );
}

export default SongMapper;