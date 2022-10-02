import { TextField, InputAdornment, IconButton } from "@mui/material";
import React, { useState, useContext } from "react";
import { NotesListContext } from "../../store/store";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";

export function NoteInput({text = ''}) {
  const [newNoteContent, setNewNoteContent] = useState(text);
  const { addNote } = useContext(NotesListContext);
  return (
    <TextField
      multiline
      id="outlined-basic"
      fullWidth
      label="Новая заметка..."
      variant="outlined"
      value={newNoteContent}
      // no autosave because why? There is button for it.
      onChange={({ target }) => setNewNoteContent(target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                addNote({
                  body: newNoteContent
                });
                setNewNoteContent("");
              }}
            >
              <CheckBoxOutlinedIcon />
            </IconButton>
            <IconButton>
              <BrushOutlinedIcon />
            </IconButton>
            <IconButton>
              <PhotoOutlinedIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
