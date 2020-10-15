/** @jsx jsx */
import { jsx } from '@emotion/core';
// import {useEffect} from 'react'
import { connect } from 'react-redux'
import { useDispatch } from "react-redux";
import { addFretboard } from './actions'
import { E9 } from './store/tunings'
import { generateFretBoard } from './notesGenerator';

import FretBoard from './components/FretBoard';
import SelectedNotes from './components/SelectedNotes'
import ChordInput from './components/ChordInput'
import PedalControls from './components/PedalControls';

// import { PolySynth } from 'tone'

const App = () => {
  const dispatch = useDispatch()
  // const synth = new PolySynth().toMaster();

  const allNotes = generateFretBoard(E9)
  dispatch(addFretboard(allNotes))

  // const handlePlay = () => {
  //   // synth.triggerAttackRelease(note, "8n")
  // }

  // useEffect(() => {
  //   const allNotes = generateFretBoard(E9)
  //   dispatch(addFretboard(allNotes))
  // }, [dispatch]);

  return (
    <div css={{ padding: 40}}>
      <div>
        <h1>Pedal Steel Chord Finder</h1>
      </div>

      <div>
        <FretBoard />
        <div css={{display: 'flex', padding: '40px 0'}}>
          <div css={{marginRight: 40}}>
            <PedalControls />
          </div>
          <div css={{marginRight: 40}}>
            <ChordInput />
          </div>
          <SelectedNotes/>
        </div>
      </div>
    </div>
  );
}

export default connect()(App)