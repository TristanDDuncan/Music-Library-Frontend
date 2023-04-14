import React, { useState } from 'react';
import './MusicForm.css'
const AddEntryForm = (props) =>{
    const [title, setTitle]= useState ('')
    const [artist, setArtist]= useState('')
    const [album, setAlbum]= useState ('')
    const [release_date, setRelease_date]= useState ('')
    const [genre, setGenre] = useState ('')

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            title : title,
            artist : artist,
            album : album,
            release_date : release_date,
            genre : genre
        };
        console.log(newEntry);
        props.addNewEntry(newEntry)
    }

    return(
        <form onSubmit={handleSubmit} className="form-grid">
            <div className='form-group'>
            <label>Title</label>
            <input type= 'text' value={title} onChange = {(event) => setTitle(event.target.value)} data-test="title" />
            </div>
            <div className='form-group'>
            <label>Artist</label>
            <input type= 'text' value={artist} onChange = {(event) => setArtist(event.target.value)} data-test="artist"/>
            </div>
            <div className='form-group'>
            <label>Album</label>
            <input type= 'text' value={album} onChange = {(event) => setAlbum(event.target.value)} data-test="album" />
            </div>
            <div className='form-group'>
            <label>Release Date</label>
            <input type= 'Date' value={release_date} onChange = {(event) => setRelease_date(event.target.value)} data-test="release date"/>
            </div>
            <div className='form-group'>
            <label>Genre</label>
            <input type= 'text' value={genre} onChange = {(event) => setGenre(event.target.value)} data-test="genre"/>
            </div>
            <button type = 'submit' className='btn-btn-primary' style={{'margin-top': '1rem'}} data-testid="submit btn">Add Song </button>

        </form>
    )
}
export default AddEntryForm;