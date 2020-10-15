/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addChord } from '../actions'
import { Chord } from '@tonaljs/tonal'

const ChordInput = () => {
  const dispatch = useDispatch()
  const [chord, setChord] = useState('')

  const handleClick = () => {
    const notes = Chord.get(chord).notes
    dispatch(addChord(notes))
  }

  return (
    <div css={{ marginBottom: 20}}>
      <label htmlFor="chordInput" css={{ display: 'block'}}><h2>Find Chord:</h2></label>
      <input
        id="chordInput"
        css={{
          padding: 8,
          fontSize: 20,
          background: '#242929',
          border: 'none',
          color: '#fff',
          width: 100
        }}
        onChange={e => setChord(e.target.value)}/>
        <button onClick={handleClick} css={{
          border: 'none',
          padding: '12px',
          float: 'right',
        }}>Find</button>
    </div>
  )
}

export default ChordInput