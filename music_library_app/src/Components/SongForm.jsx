import React, { useState } from 'react';

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
        <div className = "form-group">
            <label>Title</label>
            <input type = 'string' className = 'form-control' value = {title} onChange={(event) => setTitle(parseFloat(event.target.value))}/>
        </div>
        <div className = "form-group">
            <label>Artist</label>                
            <input type = 'string' className = 'form-control' value = {artist} onChange={(event) => setArtist(event.target.value)}/>
        </div>
        <div className = "form-group">
            <label>Album</label>
            <input type = 'string' className = 'form-control' value = {album} onChange={(event) => setAlbum(parseFloat(event.target.value))}/>
        </div>
        <div className = "form-group">
            <label>Release Date</label>
            <input type = 'date' className = 'form-control' value = {releaseDate} onChange={(event) => setReleaseDate(parseFloat(event.target.value))}/>
        </div>
        <div className = "form-group">
            <label>Genre</label>
            <input type = 'string' className = 'form-control' value = {genre} onChange={(event) => setGenre(parseFloat(event.target.value))}/>
        </div>
        <button type = 'submit' className = 'btn btn-primary' style = {{'margin-top': '1em'}}>Add</button>
    </form>
     );
}

export default SongForm;