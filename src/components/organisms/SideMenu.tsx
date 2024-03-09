import React from "react";
import { ListItemText, MenuItem, MenuList, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

type MenuItemType = {
  id: string;
  emoji: string;
  text: string;
};

type Props = {
  menuItems: MenuItemType[];
  initialSelectedItemId?: string;
};

const SideMenu = (props: Props) => {
  const { menuItems, initialSelectedItemId = "" } = props;
  const navigate = useNavigate();
  const [selectedItemId, setSelectedItemId] = React.useState<string>(
    initialSelectedItemId
  );

  const handleListItemClick = (id: string) => {
    setSelectedItemId(id);
    navigate(id);
  };

  return (
    <>
      <Paper sx={{ width: 320, maxWidth: "100%" }}>
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              id={item.id}
              onClick={() => handleListItemClick(item.id)}
              selected={selectedItemId === item.id}
            >
              {item.emoji}
              <ListItemText>{item.text}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </>
  );
};

export default SideMenu;
