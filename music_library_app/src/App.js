import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import SongForm from './Components/SongForm';
import MusicTable from './Components/MusicTable';

function App() {


    const [songs, SetSongs] = useState([]);


    useEffect(() => {
        GetAllSongs();
    }, []);

    async function GetAllSongs(){
        const response = await axios.get('http://127.0.0.1:8000/api/songs/')
        console.log(response.data);
        SetSongs(response.data)      
    }

    return(
        <div>
        <NavBar />
        <MusicTable songs = {songs}/>
        <SongForm />
        </div>

    )
}

export default App;