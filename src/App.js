import React, { createContext, useState } from "react";
import { Router, Link as RouterLink, Redirect } from "@reach/router";
import clsx from "clsx";
import {
  makeStyles,
  //useTheme,
  createMuiTheme,
  //ThemeProvider,
  MuiThemeProvider
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import BurgerMenu from "./burgerMenu";
import Link from "@material-ui/core/Link";
import ImageGrid from "./pages/imageGrid";

const defaultState = {
  layout: "grid"
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ce93d8",
      dark: "#ab47bc",
      light: "#e1bee7"
    },
    secondary: {
      main: "rgba(0, 151, 167, 0.73)",
      dark: "rgba(0, 96, 100, 0.76)",
      light: "rgba(77, 208, 225, 0.7)"
    }
  }
});
export const context = createContext(defaultState);
const drawerWidth = 240;
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
  // contentShift: {
  //   transition: theme.transitions.create("margin", {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen
  //   }),
  //   marginLeft: 0
  //},
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

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [store, dispatch] = useState(defaultState);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <context.Provider value={{ ...store, dispatch }}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              // [classes.appBarShift]: open
            })}
          >
            <Toolbar>
              <IconButton
                color="yellow"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                <Link component={RouterLink} to="/" style={{ color: "white" }}>
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
                path="/hot/:page"
                classes={classes}
                store={store}
                sort={"hot"}
              />
              <ImageGrid
                path="/new/:page"
                classes={classes}
                store={store}
                sort={"new"}
              />
              <ImageGrid
                path="/top/:page"
                classes={classes}
                store={store}
                sort={"top"}
              />
              <ImageGrid
                path="/rising/:page"
                classes={classes}
                store={store}
                sort={"rising"}
              />
              <ImageGrid
                path="/Leon/:page"
                classes={classes}
                store={store}
                sort={"Leon"}
              />
              <Redirect from="/" to="/hot/1" />
              <Redirect from="/hot" to="/hot/1" />
              <Redirect from="/new" to="/new/1" />
              <Redirect from="/top" to="/top/1" />
              <Redirect from="/rising" to="/rising/1" />
              <Redirect from="/Leon" to="/Leon/1" />
            </Router>
          </main>
        </div>
      </context.Provider>
    </MuiThemeProvider>
  );
}
