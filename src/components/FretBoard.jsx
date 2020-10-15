/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useSelector } from "react-redux";
import Fret from './Fret'

const FretBoard = () => {
  const frets = useSelector(state => state.fretboard.frets);

  return (
      <div
        css={{
          display: 'flex',
          padding: 4,
          backgroundColor: "#303236e",
          color: '#fff',
          height: 400,
          border: '2px solid #18171A',
          flex: 1,
          margin: 'auto',
          overflow: 'scroll'
        }}
      >
        {frets.length && frets.map( (notes, index) => <Fret key={index} fretNumber={index} fretNotes={notes} />)}
      </div>
  )
}

export default FretBoard;