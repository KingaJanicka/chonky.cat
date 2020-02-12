import React, { createContext, useState } from "react";
import { Router, Link as RouterLink, Redirect } from "@reach/router";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import BurgerMenu from "./burgerMenu";
import Index from "./pages";
import Leon from "./pages/leon";
import Link from "@material-ui/core/Link";
import ImageGrid from "./pages/imageGrid";

const defaultState = {
  layout: "grid"
};
export const context = createContext(defaultState);
const drawerWidth = 240;
const numberOfImages = 12;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  card: {
    width: "100%"
  },
  media: {
    height: 345
  },
  imageContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(345px, 1fr))",
    gridGap: "2em"
  }
}));

export function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
}

export function MediaCard() {
  const classes = useStyles();
}

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [store, dispatch] = useState(defaultState);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <context.Provider value={{ ...store, dispatch }}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="Yellow"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              <Link component={RouterLink} to="/" color="White">
                Chonky.cat
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <BurgerMenu
          classes={classes}
          open={open}
          setOpen={setOpen}
          theme={theme}
        />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <Router>
            <ImageGrid path="/" classes={classes} store={store} />
            <ImageGrid
              path="/Hot/:page"
              classes={classes}
              store={store}
              sort={"Hot"}
            />
            <ImageGrid
              path="/New/:page"
              classes={classes}
              store={store}
              sort={"New"}
            />
            <ImageGrid
              path="/Top/:page"
              classes={classes}
              store={store}
              sort={"Top"}
            />
            <ImageGrid
              path="/Rising/:page"
              classes={classes}
              store={store}
              sort={"Rising"}
            />
            <Leon path="/Leon/:page" classes={classes} store={store} />
            <Redirect from="/Hot" to="/Hot/1" />
          </Router>
        </main>
      </div>
    </context.Provider>
  );
}
