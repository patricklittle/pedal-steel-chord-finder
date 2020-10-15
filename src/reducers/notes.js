// types
const ADD_NOTE = 'ADD_NOTE'
const REMOVE_NOTE = 'REMOVE_NOTE'
const ADD_CHORD = 'ADD_CHORD'

// creators
export const addNote = ({name}) => {
  return {
    type: ADD_NOTE,
    name
  }
}

export const addChord = (notes) => {
  return {
    type: ADD_CHORD,
    notes
  }
}

export const remoteNote = (name) => {
  return {
    type: REMOVE_NOTE,
    name
  }
}

const initialState = {
  selected: []
}

const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      // console.log(action.note.name)
      return {
        ...state,
        selected: [...state.selected, action.note.name]
    }
    case 'ADD_CHORD':
      // console.log()
      return Object.assign({}, state, {
        selected: action.notes
      })
    case 'REMOVE_NOTE':
      return {
        ...state,
        selected: [
        ...state.selected.filter((selectedNote) => selectedNote !== action.note)
        ]
      };
    default:
      return state
  }
}

export default notes