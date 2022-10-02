import { Typography } from "@mui/material";

interface HeaderProps {
  isOpen: boolean;
  [x: string]: any;
}

export const Header = ({ isOpen, ...props }: HeaderProps) =>
  isOpen ? (
    <Typography variant="h6" noWrap component="div" {...props}>
      My notes
    </Typography>
  ) : null;
