/** @jsx jsx */
import { jsx } from '@emotion/core';
import Note from './Note';
import { useSelector } from 'react-redux'
import isEqual from '../utils/isEqual'

const Fret = ({fretNumber, fretNotes}) => {
  const fretWidth = fretNumber * 2.5 + 60
  const selectedNotes = useSelector((state) => state.notes.selected)
  const notes = fretNotes.map(n => n.name)
  const notesFound = selectedNotes.filter(note => notes.includes(note))
  const hasChord = selectedNotes.length && isEqual(notesFound, selectedNotes)

  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      background: hasChord ? '#5e6f4e' : '#202020',
      height: '100%',
      minWidth: fretWidth,
      borderRight: fretNumber === 0 ? '4px solid #333717' : '1px solid #303236',
      '&:hover': {
        background: '#212024'
      },
      }}>
      <div css={{
        position: 'absolute',
        fontSize: 10,
        top: 4,
        left: 4
      }}>
        {fretNumber}
      </div>
      {fretNotes.map((props, i) => {

        return <Note key={i} string={i + 1} {...props} chord={hasChord} />
      })}
    </div>
  )
}

export default Fret