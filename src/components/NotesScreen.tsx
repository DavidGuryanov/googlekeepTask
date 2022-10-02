import React from "react";
import {
  Box,
  CssBaseline,
  Divider,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchBar from "./SearchBar";
import Header from "./Header";
import Menu from "./Menu";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import { AppBar, Drawer, DrawerHeader } from "./styles";
import EditModal from "./Modal/Modal";

export default function NotesScreen() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Header isOpen={!open} />
          <SearchBar />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Header isOpen={open} paddingLeft={"20px"} />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Menu open={open} />
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <EditModal />
        <NoteInput />
        <NotesList />
      </Box>
      
    </Box>
  );
}
