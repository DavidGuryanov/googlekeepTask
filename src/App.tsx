import React, { useReducer } from "react";
import NotesScreen from "./components/NotesScreen";
import { actions } from "./store/actions";
import { rootReducer } from "./store/reducer";
import { initialState, NotesListContext } from "./store/store";
import { TDefaultNote } from "./store/types";

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const value = {
    notesList: state.notesList,
    activeNoteId: state.activeNoteId,
    filteredNotesList: state.filteredNotesList,
    addNote: ({ body }: {body: string}) => {
      dispatch({ type: actions.ADD_NOTE, payload: {body} });
    },
    setActiveNote: (id: number) => {
      dispatch({ type: actions.SET_ACTIVE_NOTE, payload: {id} });
    },
    filterNotes: (query: string) => {
      dispatch({ type: actions.FILTER_NOTES, payload: {query} });
    },
    editNote: ({ body, id }: TDefaultNote) => {
      dispatch({ type: actions.EDIT_NOTE, payload: {body, id} });
    },
  };
  return (
    <NotesListContext.Provider value={value}>
      <NotesScreen />
    </NotesListContext.Provider>
  );
}

export default App;
