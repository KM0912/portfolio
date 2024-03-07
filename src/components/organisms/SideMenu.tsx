import React from "react";
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  styled,
} from "@mui/material";

const StyledListItemIcon = styled(ListItemIcon)({
  color: "unset",
});

type MenuItemType = {
  id: string;
  icon: string;
  text: string;
};

type Props = {
  menuItems: MenuItemType[];
  initialSelectedItemId?: string;
};

const SideMenu = (props: Props) => {
  const { menuItems, initialSelectedItemId = "" } = props;
  const [selectedItemId, setSelectedItemId] = React.useState<string>(
    initialSelectedItemId
  );

  const handleListItemClick = (id: string) => {
    setSelectedItemId(id);
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
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </>
  );
};

export default SideMenu;
