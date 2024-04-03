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

const StyledMenuItem = styled(MenuItem)({
  borderRadius: "5px",
  margin: "0.5em 0",
  "&:hover": {
    backgroundColor: colors.hoverItemBackground,
  },
});

const StyledSpan = styled("span")({
  fontSize: "1.5rem",
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
    <StyledPaper
      sx={{ maxWidth: "100%", padding: "1em", borderRadius: "10px" }}
    >
      <MenuList>
        {menuItems.map((item) => (
          <StyledMenuItem
            key={item.id}
            id={item.id}
            onClick={() => handleListItemClick(item.id)}
            selected={selectedItemId === item.id}
          >
            <StyledSpan>{item.emoji}</StyledSpan>
            <ListItemText primary={item.text} />
          </StyledMenuItem>
        ))}
      </MenuList>
    </StyledPaper>
  );
};

export default SideMenu;
