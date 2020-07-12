/** @jsx jsx */
import { jsx } from '@emotion/core'
import { PolySynth } from 'tone';

interface FretNotes {
  "string": number;
  "name": string;
  "note": string;
}

const Note = ({string, name, note}: FretNotes) => {
  const synth = new PolySynth().toMaster();


  const handleClick = () => {
    synth.triggerAttackRelease("C4", "8n")
  }

  const StringGauge = string * 0.5 + 1;

  return (
    <button
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
        '&:hover': {
          background: '#303236'
        }
      }}
    >
      <span
        css={{
          padding: 2,
          borderRadius: 22,
          height: 20,
          width: 20,
          background: "rgba(240, 240, 240, 0.9)",
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

export default Note;