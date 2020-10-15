// types
const ADD_NOTE = 'ADD_NOTE'
const REMOVE_NOTE = 'REMOVE_NOTE'
const ADD_FRETBOARD = 'ADD_FRETBOARD'
const ADD_CHORD = 'ADD_CHORD'

// creators
export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    note
  }
}

export const addFretboard = (frets) => {
  return {
    type: ADD_FRETBOARD,
    frets
  }
}

export const remoteNote = (note) => {
  return {
    type: REMOVE_NOTE,
    note
  }
}

export const addChord = (notes) => {
  return {
    type: ADD_CHORD,
    notes
  }
}

export const activatePedal = (pedal) => {
  return {
    type: pedal.action,
    active: pedal.active
  }
}