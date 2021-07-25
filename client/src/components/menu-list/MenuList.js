import { useHistory } from "react-router-dom";
import { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const MenuList = () => {
  const history = useHistory();
  const [toggle, setToggle] = useState(false);

  const handleListItemClick = (path) => history.push(path);

  const handleListItemToggle = () => setToggle(!toggle);

  return (
    <div>
      <List>
        <ListItem button onClick={() => handleListItemClick("/")}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick("/trending")}>
          <ListItemText primary="Trending Now" />
        </ListItem>
        <ListItem button onClick={handleListItemToggle}>
          <ListItemText>Genres</ListItemText>
          {toggle ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={toggle} timeout="auto" unmountOnExit>
          <List>
            <ListItem button>
              <ListItemText primary="Action" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Horror" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Comedy" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Romance" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default MenuList;
