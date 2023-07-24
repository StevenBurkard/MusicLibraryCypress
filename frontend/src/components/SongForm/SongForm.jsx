import React, {useState} from 'react';
import './SongForm.css'
import axios from "axios";

const SongForm = (props) => {
    const [title,setTitle] = useState('')
    const [artist,setArtist] = useState('')
    const [album,setAlbum] = useState('')
    const [genre,setGenre] = useState('')
    const [release_date,setReleaseDate] = useState('')
    const [running_time,setRunningTime] = useState('')

const handleSubmit = async(e) =>{
    e.preventDefault()
    let newSong = {
        title:title,
        artist:artist,
        album:album,
        genre: genre,
        release_date:release_date,
        running_time: running_time
    }
    await axios.post('http://127.0.0.1:5000/api/songs', newSong)
    props.newSong()
}

        return ( 
            <div className="formDiv">
            <form onSubmit={handleSubmit}>
                <h1>Add a Song</h1>
                <label>Title</label>
                <input name="title" onChange={(e)=>setTitle(e.target.value)} data-cy="song-title" />
                <label>Artist</label>
                <input name="artist" onChange={(e)=>setArtist(e.target.value)} data-cy="song-artist" />
                <label>Album</label>
                <input name="album" onChange={(e)=>setAlbum(e.target.value)} data-cy="song-album" />
                <label>Genre</label>
                <input name="genre" onChange={(e)=>setGenre(e.target.value)} data-cy="song-genre" />
                <label>Release Date</label>
                <input type="date" name="release_date" onChange={(e)=>setReleaseDate(e.target.value)} data-cy="song-release-date" />
                <label>Running Time</label>
                <input name="running_time" onChange={(e)=>setRunningTime(e.target.value)} data-cy="song-running-time" />
                <button type="submit" data-cy="add-song-button">Add Song</button>
            </form>
            </div>
         );
}
 
export default SongForm;
