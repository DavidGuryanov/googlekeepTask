import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

interface MenuProps {
  open: boolean;
}

const menuItems = {
  Заметки: <EmojiObjectsOutlinedIcon />,
  Напоминания: <NotificationsNoneOutlinedIcon />,
  "Изменение ярлыков": <EditOutlinedIcon />,
  Архив: <ArchiveOutlinedIcon />,
  Корзина: <DeleteOutlineOutlinedIcon />,
} as const;

export function Menu({ open }: MenuProps) {
  return (
    <List>
      {(Object.keys(menuItems) as Array<keyof typeof menuItems>).map((text) => (
        <ListItem key={text} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {menuItems[text]}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
