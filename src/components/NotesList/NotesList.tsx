import { IconButton, List, ListItem, Typography } from "@mui/material";
import { useContext } from "react";
import { NotesListContext } from "../../store/store";
import { StyledCard } from "./styles";

import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";

export function NotesList() {
  const { setActiveNote, filteredNotesList } =
    useContext(NotesListContext);
  return (
    <List>
      {filteredNotesList.map((note) => {
        return (
          <ListItem disablePadding key={note.id}>
            <StyledCard
              variant="outlined"
              onClick={() => setActiveNote(note.id)}
            >
              <Typography
                paragraph
                textAlign="left"
                padding={2}
                whiteSpace="pre-wrap"
              >
                {note.body}
              </Typography>

              <IconButton
                onClick={() => {
                  setActiveNote(note.id);
                }}
                sx={{ display: "flex", margin: "0 .5rem 0 auto" }}
              >
                <BrushOutlinedIcon />
              </IconButton>
            </StyledCard>
          </ListItem>
        );
      })}
    </List>
  );
}
