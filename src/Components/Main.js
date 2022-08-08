import React, { useState } from 'react'
import NoteBody from './NoteBody'
import NotesHeader from './NotesHeader'

function Main({notes, selectedNoteIndex, setNotes, darkMode}) {

    const [write, setWrite] = useState(true)
    const [preview, setPreview] = useState(false)

  return (
    <div className={`Main ${darkMode?' main-dark':''}`}>
        <NotesHeader
        write={write}
        setWrite={setWrite}
        preview={preview}
        setPreview={setPreview}
        darkMode={darkMode}
        />
        <NoteBody
        notes={notes}
        setNotes={setNotes}
        selectedNoteIndex={selectedNoteIndex}
        write={write}
        preview={preview}
        darkMode={darkMode}
        />
    </div>
  )
}

export default Main