/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';
import Fret from './Fret'
import { E9 } from '../store/tunings'
import { generateFretBoard } from '../notesGenerator';

const FretBoard = () => {

  const allNotes = generateFretBoard(E9)

  return (
    <div
      css={{
        display: 'flex',
        padding: 4,
        backgroundColor: "#303236e",
        color: '#fff',
        height: 400,
        border: '2px solid #18171A',
        width: 'max-content',
        margin: 'auto',
        overflow: 'scroll'
      }}
    >
      {allNotes.map( (notes, index) => <Fret key={index} fretNumber={index} fretNotes={notes} />)}
    </div>
  )
}

export default FretBoard;