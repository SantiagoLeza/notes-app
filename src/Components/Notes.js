import React from 'react'

function Notes({notes, selectedNote, setSelectedNote}) {

  return (
    <div>
        {notes.map((note, index) => {
            return (
                <div key={index}
                onClick={() => setSelectedNote(index)}
                className={selectedNote === index ? 'note selected' : 'note'}
                >
                    <p>{note.title}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Notes