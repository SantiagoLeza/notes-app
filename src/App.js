import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import { useState } from 'react';

function App() {

  const [notes, setNotes] = useState([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(-1);

  const addNotes = () => {
    setNotes([...notes, {
        title: 'Note ' + (notes.length + 1),
        text: `#This is note ${notes.length + 1}`
    }]);
    setSelectedNoteIndex(notes.length);
  }

  return (
    <div className="App">
      <Sidebar
      notes={notes}
      addNotes={addNotes}
      selectedNote={selectedNoteIndex}
      setSelectedNote={setSelectedNoteIndex}
      />
      <Main
      notes={notes}
      selectedNoteIndex={selectedNoteIndex}
      setNotes={setNotes}
      />
    </div>
  );
}

export default App;
