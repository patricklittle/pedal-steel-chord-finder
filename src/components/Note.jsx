/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useDispatch } from "react-redux";
import { addNote, remoteNote } from '../actions'
import { useSelector } from 'react-redux'

const Note = (props) => {
  const { string, name, note } = props
  const dispatch = useDispatch();
  const selectedNotes = useSelector((state) => state.notes.selected)
  const noteSelected = selectedNotes.includes(name)

  const handleClick = () => {
    if(noteSelected) {
      dispatch(remoteNote(name))
    } else {
      dispatch(addNote({ string, name, note }))
    }
  }

  const StringGauge = string * 0.5 + 1;

  return (
    <button
    onClick={handleClick}
      css={{
        position: 'relative',
        cursor: 'pointer',
        height: '100%',
        width: '100%',
        display: 'block',
        border: 'none',
        margin: 0,
        padding: 0,
        background: '0 0/100% 3px no-repeat',
        backgroundImage: 'linear-gradient(0deg,#fff,rgba(250,250,250,0.3))',
        backgroundPositionY: '50%',
        backgroundSize: `100%  ${StringGauge}px`,
        outline: 'none',
        '&:hover': {
          'span': {
            background: '#BDD684'
          }
        }
      }}
    >
      <span
        css={{
          padding: 2,
          borderRadius: 22,
          height: 20,
          width: 20,
          background: noteSelected ? "#A9CF54" : "#B9B0AB",
          color: "rgb(0, 0, 0)",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          lineHeight: "1"
        }}
      >{name}</span>
    </button>
  )
}
export default Note
