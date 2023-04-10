import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type= 'text' value={title} onChange = {(event) => setTitle(event.target.value)} />
            <label>Artist</label>
            <input type= 'text' value={artist} onChange = {(event) => setArtist(event.target.value)} />
            <label>Album</label>
            <input type= 'text' value={album} onChange = {(event) => setAlbum(event.target.value)} />
            <label>Release Date</label>
            <input type= 'Date' value={release_date} onChange = {(event) => setRelease_date(event.target.value)} />
            <label>Genre</label>
            <input type= 'text' value={genre} onChange = {(event) => setGenre(event.target.value)} />
            <button type = 'submit'> Add Song </button>

        </form>
    )
}
export default AddEntryForm;