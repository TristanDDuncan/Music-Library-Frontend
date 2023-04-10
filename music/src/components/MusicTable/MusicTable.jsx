
const MusicTable = (props) =>{
    const handleDelete = (id) => {
        deleteEntry(id);
      };
    
    return(
        <table>
            <thead>
                <tr>
                <th>ID #</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {props.parentSongs.map((entry, index) => {
                    return(
                    <tr>
                        <td>{index + 1}</td>
                        <td>{entry.title}</td>
                        <td>{entry.artist}</td>
                        <td>{entry.album}</td>
                        <td>{entry.release_date}</td>
                        <td>{entry.genre}</td>
                        <td>
                            <button onClick={() => handleDelete(entry.id)}>Delete</button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default MusicTable;