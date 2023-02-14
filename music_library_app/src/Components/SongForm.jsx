import React, { useState } from 'react';
import './SongForm.css';

const SongForm = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title : title,
            artist : artist,
            album : album,
            releaseDate : releaseDate,
            genre : genre,
        }
        console.log(newSong);
        props.addNewSongProperty(newSong);
    }


    return ( 

        <form onSubmit={handleSubmit} className = 'form-grid'>
            <p>ADD MUSIC</p>
            <br/>
            <div className = "form-group">
                <label>TITLE:&nbsp;&nbsp;&nbsp;</label>
                <input type = 'string' className = 'form-control' value = {title} onChange={(event) => setTitle(parseFloat(event.target.value))}/>
            </div>
            <br/>
            <div className = "form-group">
                <label>ARTIST:&nbsp;&nbsp;</label>                
                <input type = 'string' className = 'form-control' value = {artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <br/>
            <div className = "form-group">
                <label>ALBUM:&nbsp;&nbsp;&nbsp;</label>
                <input type = 'string' className = 'form-control' value = {album} onChange={(event) => setAlbum(parseFloat(event.target.value))}/>
            </div>
            <br/>
            <div className = "form-group">
                <label>RELEASE <br/> DATE:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type = 'date' className = 'form-control' value = {releaseDate} onChange={(event) => setReleaseDate(parseFloat(event.target.value))}/>
            </div>
            <br/>
            <div className = "form-group">
                <label>GENRE:&nbsp;&nbsp;&nbsp;</label>
                <input type = 'string' className = 'form-control' value = {genre} onChange={(event) => setGenre(parseFloat(event.target.value))}/>
            </div>
            <br/>
            <button type = 'submit' className = 'btn btn-primary' style = {{'margin-top': '1em'}}>ADD SONG</button>
        </form>
     );
}

export default SongForm;