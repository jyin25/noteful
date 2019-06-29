import React from 'react';

class NoteSelected extends React.Component {
  render() {
    console.log(this.props)
    const {selectedItem} = this.props
    return (
      <>
        <div>
          <h1>{selectedItem.name}</h1>
          <p>{selectedItem.modified}</p>
          <button>Delete Note</button>
        </div>
        <p>{selectedItem.content}</p>
      </>
    )
  }
}

export default NoteSelected;