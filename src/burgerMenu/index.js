import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SortIcon from "@material-ui/icons/Sort";
import PetsIcon from "@material-ui/icons/Pets";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import RedditIcon from "@material-ui/icons/Reddit";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { Link as RouterLink } from "@reach/router";
import Link from "@material-ui/core/Link";
import { useTranslation } from "react-i18next";
import SvgIcon from "@material-ui/core/SvgIcon";

const BurgerMenu = ({ classes, open, setOpen, theme }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { t, i18n } = useTranslation();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = event => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem
          button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link component={RouterLink} to="/hot" color="white">
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <WhatshotIcon />
                </ListItemIcon>
                <ListItemText primary={t("Hot")} />
              </MenuItem>
            </Link>
            <Link component={RouterLink} to="/new" color="white">
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <NewReleasesIcon />
                </ListItemIcon>
                <ListItemText primary={t("New")} />
              </MenuItem>
            </Link>
            <Link component={RouterLink} to="/top" color="white">
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <RedditIcon />
                </ListItemIcon>
                <ListItemText primary={t("Top")} />
              </MenuItem>
            </Link>
            <Link component={RouterLink} to="/rising" color="white">
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <TrendingUpIcon />
                </ListItemIcon>
                <ListItemText primary={t("Rising")} />
              </MenuItem>
            </Link>
          </Menu>
          <ListItemIcon>
            <SortIcon />
          </ListItemIcon>
          <ListItemText primary={t("Sort by")} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <Link component={RouterLink} to="/Leon" color="white">
          <ListItem button text="LEON">
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary="LEON" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SvgIcon viewbox="0 -6 24 24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 30"
                width="24"
                height="12"
              >
                <clipPath id="a">
                  <path d="M0 0v30h60V0z" />
                </clipPath>
                <clipPath id="b">
                  <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
                </clipPath>
                <g clip-path="url(#a)">
                  <path d="M0 0v30h60V0z" fill="#012169" />
                  <path
                    d="M0 0l60 30m0-30L0 30"
                    stroke="#fff"
                    stroke-width="6"
                  />
                  <path
                    d="M0 0l60 30m0-30L0 30"
                    clip-path="url(#b)"
                    stroke="#C8102E"
                    stroke-width="4"
                  />
                  <path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10" />
                  <path
                    d="M30 0v30M0 15h60"
                    stroke="#C8102E"
                    stroke-width="6"
                  />
                </g>
              </svg>
            </SvgIcon>
          </ListItemIcon>
          <ListItemText
            primary="EN"
            onClick={() => i18n.changeLanguage("en")}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SvgIcon viewbox=" 0 0 24 24 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 810 540">
                <path fill="#FCDD09" d="M0 0h810v540H0z" />
                <path
                  stroke="#DA121A"
                  stroke-width="60"
                  d="M0 90h810m0 120H0m0 120h810m0 120H0"
                />
              </svg>
            </SvgIcon>
          </ListItemIcon>
          <ListItemText
            primary="CAT"
            onClick={() => i18n.changeLanguage("cat")}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default BurgerMenu;
