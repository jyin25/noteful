import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';
import store from './store';
import SideFolder from './components/Folder/SideFolder';
import MainNote from './components/Note/MainNote'
import Note from './components/Note/Notes'
import GoBack from './components/Folder/GoBack'
import NoteSelected from './components/Note/NoteSelected'


class App extends React.Component {
  state = {
    store,
    folderId: '',
    selectItem: ''
  }

  handleClickFolder = (id) => {
    this.setState({folderId: id})
  }

  passFolderId(folderId) {
    return folderId;
  }

  handleNoteId = (id) => {
    this.setState({selectItem: id})
  }

  
  render() {
    const {folders} = this.state.store
    const {notes} = this.state.store

    return (
      <div className="App">
        <nav>
          <Link to='/'>Noteful</Link>
        </nav> 
        <main>
          <section>
            <Switch>
              <Route
                exact path='/'
                render = {() =>
                  <SideFolder 
                    folders={folders}
                    notes={notes}
                    handleClickFolder={this.handleClickFolder}/>}
              />
              <Route
                path='/folder/:name'
                render = {() =>
                  <SideFolder 
                    folders={folders}
                    notes={notes}
                    handleClickFolder={this.handleClickFolder}/>}
              />
              <Route
                path='/note/:name'
                render = {(props) =>
                  <GoBack 
                    folders={folders}
                    notes={notes}
                    folderId={this.state.folderId}
                    props={props}/>}
              />
            </Switch>
          </section>

          <section>
            <Switch>
              <Route
                exact path='/'
                render = {() => 
                  <MainNote 
                    items={notes}
                    handleNoteId={this.handleNoteId}/>}
              />
              <Route 
                path='/folder/:name'
                render = {() =>
                  <Note 
                    folderIds={this.state.folderId}
                    itemNotes = {notes}
                    handleNoteId={this.handleNoteId}/>}
              />
              <Route 
                path='/note/:name'
                render = {() =>
                  <NoteSelected 
                  selectedItem = {this.state.selectItem}/>}
               />
            </Switch>
          </section> 
        </main>
      </div>
    );
  }

}

export default App;
