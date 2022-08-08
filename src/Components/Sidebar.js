import React from 'react'
import Notes from './Notes'

function Sidebar({notes, addNotes, selectedNote, setSelectedNote, darkMode}) {

   return (
    <div className={`Sidebar ${darkMode?' dark-sidebar':''}`}>
        <div className='sidebar-header'>
            <h1>Notes</h1>
            <div className='plusIcon'
            onClick={addNotes}
            >
                <p>+</p>
            </div>
        </div>
        <Notes
        notes={notes}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
        />
    </div>
  )
}

export default Sidebar