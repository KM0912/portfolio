import React from "react";
import { ListItemText, MenuItem, MenuList, Paper, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { colors } from "../../config/colors";

type MenuItemType = {
  id: string;
  emoji: string;
  text: string;
};

type Props = {
  menuItems: MenuItemType[];
  initialSelectedItemId?: string;
};

const StyledPaper = styled(Paper)({
  backgroundColor: colors.sideMenuBackground,
});

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
      <StyledPaper sx={{ maxWidth: "100%" }}>
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
      </StyledPaper>
    </>
  );
};

export default SideMenu;
