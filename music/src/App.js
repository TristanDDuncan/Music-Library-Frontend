import React,{useState, useEffect} from "react";
import axios from 'axios';
import MusicTable from './components/MusicTable/MusicTable'
import SearchBar from "./components/SearchBar/SearchBar";
import MusicForm from './components/MusicForm/MusicForm'
import './components/App.css';

function App() {
    
  const [songs, setSongs] = useState([]);

  function searchSongs(search){
    let matchingTitles = songs.filter((song)=>{
      return song.artist === search
    }
    )
    setSongs(matchingTitles)
    console.log(matchingTitles)
  }
  function searchSongs(search){
    let matchingTitles = songs.filter((song)=>{
      return song.artist === search
    }
    )
    setSongs(matchingTitles)
    console.log(matchingTitles)
  }
  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:5000/api/musiclibrarys');
    setSongs(response.data)
    console.log(response.data)
  }
   
   async function addNewEntry(entry){
    let response = await axios.post('http://127.0.0.1:5000/api/musiclibrarys', entry)
    getAllSongs();

  }
  async function deleteEntry(id) {
    try {
      const response = await axios.delete(`http://127.0.0.1:5000/api/musiclibrarys/${id}`);
      console.log(response.data);
      getAllSongs();
    } catch (error) {
      console.error(error);
    }
    
  }
  

  return (
    <div >
      <SearchBar searchSongs={searchSongs} />
        <div className="container-fluid" >
          <div className="row" >
            <div className="col-mid-6">
              <div className="border-box">
                <MusicTable parentSongs = {songs}/>
            </div>
          </div>
          <div className="col-mid-6">
          <div className="border-box">
            <MusicForm addNewEntry={addNewEntry}/>
          </div>
          </div>
         
        </div>
    </div>
    </div>
  );
}

export default App;
