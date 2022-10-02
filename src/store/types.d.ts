import { actions } from "./actions";
import { defaultNotes } from "./store";

// overkill strict actions typings

export type TDefaultNote = typeof defaultNotes[number]

export type TAddNotePayload = {
  body: string;
};

export type TFilterNotesPayload = { query: string };

export type TSetActiveNotePayload = { id: number };

export interface Action<T, P> {
  readonly type: T;
  readonly payload: P;
}
export type addAction = Action<typeof actions.ADD_NOTE, TAddNotePayload>;
export type editAction = Action<
  typeof actions.EDIT_NOTE,
  TAddNotePayload & TSetActiveNotePayload
>;
export type setActiveAction = Action<
  typeof actions.SET_ACTIVE_NOTE,
  TSetActiveNotePayload
>;
export type filterAction = Action<
  typeof actions.FILTER_NOTES,
  TFilterNotesPayload
>;
export type Actions = addAction | editAction | setActiveAction | filterAction;
