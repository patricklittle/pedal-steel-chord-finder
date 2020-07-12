import { Note } from "@tonaljs/tonal";

interface Tuning {
  "name": string;
  "note": string;
  "midi": number;
}

export const  generateFretBoard = (tuning: Array<Tuning>) => {
  let fretBoard = []
  let fretBoardLength = 18

  for( let fret = 0; fret < fretBoardLength; fret++) {
    fretBoard[fret] = tuning.map( string => {
      const midi = string.midi + fret;
      const note = Note.fromMidi(midi)

      return ({
      "midi": midi,
      "note": Note.name(note),
      "name": Note.pitchClass(note),
      })
    })
  }

  return fretBoard

}