import React from 'react';
import {Link} from 'react-router-dom'

class MainNote extends React.Component {
  
  render() {
    const {items, handleNoteId} = this.props
    return (
      <>
      <ul>
      {items.map(itemList => 
        <li>
          <Link 
              to={`/note/${itemList.id}`} 
              onClick={() => handleNoteId(itemList)}>{itemList.name}</Link>
          <p>{itemList.modified}</p>
          <button>Delete Note</button>
        </li>)}
      </ul>
      
      </>
    )
  }
}

export default MainNote;