import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/Nav Bar/NavBar';
import SongForm from './Components/Song Form/SongForm';
import MusicTable from './Components/Music Table/MusicTable';
import SearchBar from './Components/Search Bar/SearchBar'

function App() {


    const [songs, setSongs] = useState([]);


    useEffect(() => {
        GetAllSongs();
    }, []);

    async function GetAllSongs(){
        const response = await axios.get('http://127.0.0.1:8000/api/songs/')
        console.log(response.data);
        setSongs(response.data)      
    }

    return(
        <div >
            <NavBar />
            <div class ='appcontainer'>
                <div>
                    <SearchBar songs={songs} setSongs={setSongs} />
                    <MusicTable songs = {songs}/>                
                </div>
                <div>
                    <SongForm addNewSongProperty = {songs} GetAllSongs={GetAllSongs}/>
                </div>                
            </div>


        </div>

    )
}

export default App;