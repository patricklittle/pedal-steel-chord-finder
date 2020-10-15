import { Note } from '@tonaljs/tonal'

// types
const ADD_FRETBOARD = 'ADD_FRETBOARD'

// creators
export const addFretboard = (fretboard) => {
  return {
    type: ADD_FRETBOARD,
    fretboard,
  }
}

const initialState = {
  frets: [],
}

const updateString = (state, strings, active, steps) => {
  let newFrets = state.frets.map((fret) => {
    let f = fret

    strings.map((string) => {
      const stringNumber = string - 1

      let quality = '2M'

      switch(steps) {
        case '1':
          quality = '2m'
          break;
        case '-1':
          quality = '-2m'
          break;
        default:
          quality = '2M'
    }

      const midi = f[stringNumber].midi + (active ? steps : -steps)
      const note = Note.transpose(
        f[stringNumber].note,
        active ? quality : '-' + quality
      )
      const name = Note.pitchClass(note)

      return f[stringNumber] = {
        midi: midi,
        note: note,
        name: name,
      }
    })

    return f
  })
  return { frets: newFrets }
}

const fretboard = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FRETBOARD':
      return Object.assign({}, state, {
        frets: action.frets,
      })
    case 'PEDAL_A':
      return updateString(state, [5, 10], action.active, '2')
    case 'PEDAL_B':
      return updateString(state, [3, 6], action.active, '1')
    case 'PEDAL_C':
      return updateString(state, [4, 5], action.active, '2')
    case 'LKL':
      return updateString(state, [4, 8], action.active, '-1')
    case 'LKR':
      return updateString(state, [4, 8], action.active, '1')
    default:
      return state
  }
}

export default fretboard
