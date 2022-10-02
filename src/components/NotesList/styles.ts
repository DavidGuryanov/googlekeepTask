import { styled } from "@mui/material/styles";
import {
    Card,
  } from "@mui/material";

export const StyledCard = styled(Card)(() => ({
    flexGrow: 1,
    margin: ".5rem 0",
    ":hover": {
      boxShadow: "5px 4px 12px 3px rgb(0 0 0 / 12%)",
    },
    cursor: "pointer",
  }));