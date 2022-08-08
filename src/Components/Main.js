import React, { useState } from 'react'
import NoteBody from './NoteBody'
import NotesHeader from './NotesHeader'

function Main({notes, selectedNoteIndex, setNotes}) {

    const [write, setWrite] = useState(true)
    const [preview, setPreview] = useState(false)

  return (
    <div className='Main'>
        <NotesHeader
        write={write}
        setWrite={setWrite}
        preview={preview}
        setPreview={setPreview}
        />
        <NoteBody
        notes={notes}
        setNotes={setNotes}
        selectedNoteIndex={selectedNoteIndex}
        write={write}
        preview={preview}
        />
    </div>
  )
}

export default Main