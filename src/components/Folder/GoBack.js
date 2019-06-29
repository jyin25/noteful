import React from 'react';
import {Link} from 'react-router-dom';

class GoBack extends React.Component {
  render() {
    const {folderId} = this.props
    console.log(this.props)
    const {history} = this.props.props
    console.log(history)
    return (
      <>
        <button onClick={() => history.goBack()}>Go Back </button>
      </>
    )
  }
}

export default GoBack;