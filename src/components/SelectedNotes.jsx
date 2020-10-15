/** @jsx jsx */
import { jsx } from '@emotion/core'
import { remoteNote } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
// import { Chord } from '@tonaljs/tonal'

const SelectedNotes = () => {
  const dispatch = useDispatch()
  const selectedNotes = useSelector((state) => state.notes.selected)

  const handleClick = (name) => {
    dispatch(remoteNote(name))
  }

  return (
    <div
      css={{
        color: '#fff',
      }}
    >
      <h2>Selected Notes:</h2>
      <div css={{ display: 'flex',  fontSize: 24,}}>
        {selectedNotes &&
          selectedNotes.map((note, i) => (
            <div
              key={i}
              onClick={() => handleClick(note)}
              css={{ marginRight: 4, cursor: 'pointer' }}
            >
              {note}
            </div>
          ))}
      </div>
    </div>
  )
}

export default SelectedNotes
