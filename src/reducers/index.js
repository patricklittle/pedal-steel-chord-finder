import { combineReducers } from 'redux'
import fretboard from './fretboard'
import notes from './notes'

export default combineReducers({
  fretboard,
  notes
})