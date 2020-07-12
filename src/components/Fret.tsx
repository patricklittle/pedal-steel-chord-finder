/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import Note from './Note';

interface FretNotes {
  "name": string;
  "note": string;
  "midi": number;
}

interface FretBoard {
  "fretNumber": number;
  "fretNotes": Array<FretNotes>;
}

const Fret = ({fretNumber, fretNotes}:FretBoard) => {

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
      }}>{fretNumber}</div>
      {fretNotes.map((props, i) => <Note key={i} string={i + 1} {...props} />)}
    </div>
  )
}

export default Fret;