import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SongForm.css';

const SongForm = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');



    async function onSubmit(event) {
        event.preventDefault();  //prevents the page from refreshing after submitting
        const formValuesObject = {
            title : title,
            artist : artist,
            album : album,
            release_date : releaseDate,
            genre : genre,
        }
    
        sendSong(formValuesObject)
        // await axios.post('http://127.0.0.1:8000/api/songs/', formValuesObject)
        console.log(formValuesObject);
    }

    async function sendSong(song){
        try {
        let response = await axios.post('http://127.0.0.1:8000/api/songs/', song)
        console.log("This is the response",response)
        await props.GetAllSongs()
            
        } catch (error) {
            console.log("The API NO WORKIE", error.message)
        }
    }


    return ( 

        <form onSubmit={onSubmit} className = 'form-grid songform'>
            <legend>ADD MUSIC</legend>
            <br/>
            <div className = "form-group">
                <label>TITLE:&nbsp;&nbsp;&nbsp;</label>
                <input type = 'string' className = 'form-control' value = {title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <br/>
            <div className = "form-group">
                <label>ARTIST:&nbsp;&nbsp;</label>                
                <input type = 'string' className = 'form-control' value = {artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <br/>
            <div className = "form-group">
                <label>ALBUM:&nbsp;&nbsp;&nbsp;</label>
                <input type = 'string' className = 'form-control' value = {album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <br/>
            <div className = "form-group">
                <label>RELEASE <br/> DATE:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type = 'date' className = 'form-control' value = {releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
            </div>
            <br/>
            <div className = "form-group">
                <label>GENRE:&nbsp;&nbsp;&nbsp;</label>
                <input type = 'string' className = 'form-control' value = {genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <br/>
            <button class = 'SongFormButton' type = 'submit' style = {{'margin-top': '1em'}}>ADD SONG</button>
        </form>
     );
}

export default SongForm;