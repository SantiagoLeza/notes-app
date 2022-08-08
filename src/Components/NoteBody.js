import React, { useEffect, useState } from 'react'

function NoteBody({notes, setNotes, selectedNoteIndex, write, preview}) {

  if(write){
    return <NoteWrite
    notes={notes}
    setNotes={setNotes}
    selectedNoteIndex={selectedNoteIndex}
    />
  }
  else if(preview){
    return <NotePreview
    text={notes[selectedNoteIndex].text}
    />
  }
}

function NotePreview({text}) {

  var textArray = text.split('\n');

  return (
    <div className='NoteBody'>
      {
        textArray.map((line, index) => {
          if(line[0] === '#'){
            return (
              <h1
              key={index}
              >{
                line.substring(1)
              }</h1>
            )
          }
          else{
            return <div
            key={index}
            >{line}</div>
          }
        })
      }
    
    </div>
  )
}

function NoteWrite({notes, setNotes, selectedNoteIndex}){
  const [text, setText] = useState(() => {
    if(selectedNoteIndex === -1){
      return ''
    }
    else{
      return notes[selectedNoteIndex].text
    }
  });

  useEffect(() => {
    if(selectedNoteIndex === -1) return
    notes[selectedNoteIndex].text = text;
    setNotes([...notes]);
  }, [text])

  useEffect(() => {
    if(selectedNoteIndex === -1) return
    setText(notes[selectedNoteIndex].text);
  }, [selectedNoteIndex]);

  var body = (
    <div className='NoteBody'>
      <textarea
      id='text'
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
      />
        
    </div>
  )

  if(selectedNoteIndex !== -1){
    return body
  }
  return (
    <div>
      No notes
    </div>
  )
}

export default NoteBody