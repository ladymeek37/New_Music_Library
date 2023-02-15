import React from 'react';
import { useState } from 'react';
import './SearchBar.css'
import axios from 'axios';

const SearchBar = (props) => {
const [searchTerm, setSearchTerm] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        let response = props.songs.filter((song) =>{
            if ((song.title.includes(searchTerm)) || (song.artist.includes(searchTerm)) || (song.album.includes(searchTerm)) || (song.release_date.includes(searchTerm)) || (song.genre.includes(searchTerm))){
                return true;
            }
        })
        props.setSongs(response)
    }




    return (
    <div>
        <form onSubmit={handleSubmit} class = 'searchbarform'>
        <label>SEARCH SONG:</label>
        <input type='text' value={searchTerm} onChange={(event)=> setSearchTerm(event.target.value)}/>
        <button class = "SearchBarButton" type='submit' >SUBMIT</button> 
        </form>
    </div>        
    )
}

export default SearchBar;