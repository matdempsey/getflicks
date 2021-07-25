import { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Menu from "@material-ui/icons/Menu";
import MenuList from "../menu-list/MenuList";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  menuButton: {
    color: "#ffffff",
    margin: "0px 10px 0px 50px",
    fontSize: 40,
  },
});

const SideMenu = () => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);

  const handleDrawerToggle = () => setToggle(!toggle);

  return (
    <div>
      <Menu className={classes.menuButton} onClick={handleDrawerToggle} />
      {toggle && (
        <Drawer open={toggle} onClose={handleDrawerToggle}>
          <MenuList />
        </Drawer>
      )}
    </div>
  );
};

export default SideMenu;
