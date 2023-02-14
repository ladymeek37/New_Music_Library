import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Takes in a single post object from PostMapper as props

const MusicTable = (props) => {

    const [songs, SetSongs] = useState([]);


    useEffect(() => {
        GetAllSongs();
    }, []);

    async function GetAllSongs(){
        const response = await axios.get('http://127.0.0.1:8000/api/songs/')
        console.log(response.data);
        SetSongs(response.data)      
    }

    return ( 
        <div>
            
        </div>
     );
}

export default MusicTable;