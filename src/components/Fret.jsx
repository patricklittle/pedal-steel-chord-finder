/** @jsx jsx */
import { jsx } from '@emotion/core';
import Note from './Note';

const Fret = ({fretNumber, fretNotes}) => {
  const fretWidth = fretNumber * 2.5 + 60

  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      background: '#0C0B0D',
      height: '100%',
      minWidth: fretWidth,
      borderRight: '1px solid #303236',
      '&:hover': {
        background: '#212024'
      }
      }}>
      <div css={{
        position: 'absolute',
        fontSize: 10,
        top: 4,
        left: 4
      }}>
        {fretNumber}
      </div>
      {fretNotes.map((props, i) => <Note key={i} string={i + 1} {...props} />)}
    </div>
  )
}

export default Fret;