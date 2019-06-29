import React from 'react';
import {Link, Route} from 'react-router-dom';
import MainNote from '../Note/MainNote'

class SideFolder extends React.Component {
  
  
  
  
  render() {
    const {folders} = this.props
    const {notes} = this.props
    console.log(folders)
    return (
      <>
        <ul>
          {folders.map(folder => 
            <li>
              <Link 
                onClick={() => this.props.handleClickFolder(folder.id)} 
                to={`/folder/${folder.id}`}>{folder.name}</Link>
            </li>
          )}
        </ul>
        <button>Add folder</button>

      </>
    )
  }
}

export default SideFolder;