import React from 'react';
import {Link, Route} from 'react-router-dom';

class Note extends React.Component {
  render() {
    const {folderIds, itemNotes, handleNoteId} = this.props
    console.log(handleNoteId)
    const filteredItem = itemNotes.filter(item => item.folderId === folderIds)
    return (
      <>
        {filteredItem.map(item => 
          <li>
            <Link 
              to={`/note/${item.id}`} 
              onClick={() => handleNoteId(item)}>{item.name}</Link>
            <p1>{item.modified}</p1>
            <button>delete note</button>
          </li>
        )}
        
      </>
    )
  }
}

export default Note