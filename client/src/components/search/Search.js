import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    borderRadius: 20,
  },
  iconButton: { color: "#000000", padding: 10 },
  inputBase: { width: "100%" },
});

const Search = () => {
  const classes = useStyles();

  return (
    <div id="search-bar">
      <Paper className={classes.root}>
        <IconButton
          className={classes.iconButton}
          type="submit"
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase className={classes.inputBase} placeholder="" />
      </Paper>
    </div>
  );
};

export default Search;
