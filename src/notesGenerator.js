import { Note } from "@tonaljs/tonal";

export const  generateFretBoard = (tuning) => {
  let fretBoard = []
  let fretBoardLength = 18

  for( let fret = 0; fret < fretBoardLength; fret++) {
    fretBoard[fret] = tuning.map( ({midi}) => {
      const fretMidi = midi + fret
      const noteWithSharps = Note.fromMidiSharps(fretMidi)

      return {
        "midi": fretMidi,
        "note": Note.name(noteWithSharps),
        "name": Note.pitchClass(noteWithSharps),
      }
    })
  }

  return fretBoard
}