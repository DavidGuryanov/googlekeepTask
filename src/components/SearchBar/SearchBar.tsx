import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { NotesListContext } from "../../store/store";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

export const SearchBar = () => {
  const { filterNotes } = React.useContext(NotesListContext);
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => filterNotes(e.target.value)}
      />
    </Search>
  );
};
