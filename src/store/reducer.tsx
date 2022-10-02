import { actions } from "./actions";
import { initialState } from "./store";
import {
  addAction,
  editAction,
  setActiveAction,
  filterAction,
  Actions,
  TDefaultNote,
} from "./types";

// reducers

function reducerAddNote(
  state: typeof initialState,
  { payload }: addAction
): typeof initialState {
  const newList = [
    ...state.notesList,
    {
      id: new Date().valueOf(),
      body: payload.body,
    },
  ];
  return {
    ...state,
    notesList: newList,
    filteredNotesList: newList,
  };
}
function reducerEditNote(
  state: typeof initialState,
  { payload }: editAction
): typeof initialState {
  const { body, id } = payload;
  const editingNoteIndex = state.notesList.findIndex(
    (note: TDefaultNote) => note.id === id
  );
  const newNotes = [...state.notesList];
  newNotes[editingNoteIndex] = {
    body: body || "",
    id: id || new Date().valueOf(),
  };
  return { ...state, notesList: newNotes, filteredNotesList: newNotes };
}
function reducerSetActiveNote(
  state: typeof initialState,
  { payload }: setActiveAction
): typeof initialState {
  return { ...state, activeNoteId: payload.id };
}
function reducerFilterNotes(
  state: typeof initialState,
  { payload }: filterAction
): typeof initialState {
  const filtered = state.notesList.filter((note) =>
    note.body.toLowerCase().includes(payload?.query?.toLowerCase() || "")
  );
  return { ...state, filteredNotesList: filtered };
}

// root reducer

export const rootReducer = (
  state: typeof initialState,
  { type, payload }: Actions
) => {
  switch (type) {
    case actions.ADD_NOTE:
      return reducerAddNote(state, { type, payload });
    case actions.EDIT_NOTE: {
      return reducerEditNote(state, { type, payload });
    }
    case actions.SET_ACTIVE_NOTE: {
      return reducerSetActiveNote(state, { type, payload });
    }
    case actions.FILTER_NOTES: {
      return reducerFilterNotes(state, { type, payload });
    }
    default:
      return state;
  }
};
