import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { NotesListContext } from "../../store/store";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { TDefaultNote } from "../../store/types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "75%",
  bgcolor: "background.paper",
  border: "1px solid rgba(0, 0, 0, 0.65);",
  borderRadius: "7px",
  boxShadow: 24,
  p: 4,
};

export default function EditModal() {
  const [open, setOpen] = React.useState(false);
  const { setActiveNote, activeNoteId, editNote, notesList } =
    React.useContext(NotesListContext);
  const [curentNote, setCurrentNote] = React.useState<undefined | TDefaultNote>(
    undefined
  );
  React.useEffect(() => {
    if (activeNoteId && !open) {
      setOpen(true);
      const editingNote = notesList.find((note) => note.id === activeNoteId);
      setCurrentNote(editingNote);
    } else if (!activeNoteId && open) {
      setOpen(false);
    }
  }, [activeNoteId, open, notesList]);

  const handleSave = () => {
    if (curentNote) {
      editNote(curentNote);
      setActiveNote(0);
    }
  };

  const handleCancel = () => {
    setCurrentNote(undefined);
    setActiveNote(0);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleCancel}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <TextField
              multiline
              id="outlined-basic"
              fullWidth
              label="Изменить заметку"
              rows={10}
              variant="outlined"
              value={curentNote?.body}
              onChange={({ target }) => {
                if (curentNote)
                  setCurrentNote({ ...curentNote, body: target.value });
              }}
            />
            <Stack direction="row-reverse" spacing={2} marginTop={4}>
              <Button variant="contained" onClick={handleSave}>
                Сохранить
              </Button>
              <Button variant="outlined" onClick={handleCancel}>
                Отменить
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
