import React from "react";
import { TDefaultNote } from "./types";

export const defaultNotes = [
  { body: "Buy milk and eggs, make omelete", id: 1 },
  { body: "Create app", id: 2 },
  {
    body: "Ребята, не стоит вскрывать эту тему. Вы молодые, шутливые, вам все легко. Это не то. Это не Чикатило и даже не архивы спецслужб. Сюда лучше не лезть. Серьезно, любой из вас будет жалеть. Лучше закройте тему и забудьте, что тут писалось. Я вполне понимаю, что данным сообщением вызову дополнительный интерес, но хочу сразу предостеречь пытливых - стоп. Остальные просто не найдут.",
    id: 3,
  },
];

export const initialState = {
  notesList: defaultNotes,
  activeNoteId: 0,
  filteredNotesList: defaultNotes,
};

type TInitialState = typeof initialState;

// initial state w/ methods

interface TfinalState extends TInitialState {
  addNote: ({body}: {body: string}) => void;
  setActiveNote: (id: number) => void;
  filterNotes: (query: string) => void;
  editNote: (newNote: TDefaultNote) => void;
}

export const NotesListContext = React.createContext(
  initialState as TfinalState
);
