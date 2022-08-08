import { CodeIcon, LinkIcon, PhotographIcon } from '@heroicons/react/solid'

function NotesHeader({write, setWrite, preview, setPreview, darkMode}) {

    const toggleButtons = (option) => {
        if (option === 'write') {
            setWrite(true)
            setPreview(false)
        } else {
            setWrite(false)
            setPreview(true)
        }
    }

  return (
    <div className={`NotesHeader ${darkMode?'dark-header':''}`}>
        <div className={`note-button ${write?'note-button-selected':''}`}
        onClick={() => toggleButtons('write')}
        >Write</div>
        <div className={`note-button ${preview?'note-button-selected':''}`}
        onClick={() => toggleButtons('preview')}
        >Preview</div>
        <div>H</div>
        <div>B</div>
        <div>I</div>
        <div>S</div>
        <LinkIcon />
        <div>"</div>
        <CodeIcon />
        <PhotographIcon />
    </div>
  )
}

export default NotesHeader