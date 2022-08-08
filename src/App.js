import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

function App() {

  const [notes, setNotes] = useState([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(-1);
  const [darkMode, setDarkMode] = useState(false);

  const addNotes = () => {
    setNotes([...notes, {
        title: 'Note ' + (notes.length + 1),
        text: `#This is note ${notes.length + 1}`
    }]);
    setSelectedNoteIndex(notes.length);
  }

  return (
    <div className={`App ${darkMode?'app-dark':''}`}>
      <Sidebar
      notes={notes}
      addNotes={addNotes}
      selectedNote={selectedNoteIndex}
      setSelectedNote={setSelectedNoteIndex}
      darkMode={darkMode}
      />
      <Main
      notes={notes}
      selectedNoteIndex={selectedNoteIndex}
      setNotes={setNotes}
      darkMode={darkMode}
      />
      <div className={`toggler ${darkMode?'toggler-dark':''}`}
      onClick={() => setDarkMode(!darkMode)}
      >
        <SunIcon width={25} className={`sun ${!darkMode?'active': ''}`} />
        <MoonIcon width={25} className={`moon ${darkMode?'active': ''}`}/>
      </div>
    </div>
  );
}

export default App;
