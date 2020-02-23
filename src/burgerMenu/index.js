import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SortIcon from "@material-ui/icons/Sort";
import DeleteIcon from "@material-ui/icons/Delete";
import InboxIcon from "@material-ui/icons/Inbox";
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
import MailIcon from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { Link as RouterLink } from "@reach/router";
import Link from "@material-ui/core/Link";

const BurgerMenu = ({ classes, open, setOpen, theme }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
            <Link component={RouterLink} to="/Hot" color="white">
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <WhatshotIcon />
                </ListItemIcon>
                <ListItemText primary="Hot" />
              </MenuItem>
            </Link>
            <Link component={RouterLink} to="/New" color="white">
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <NewReleasesIcon />
                </ListItemIcon>
                <ListItemText primary="New" />
              </MenuItem>
            </Link>
            <Link component={RouterLink} to="/Top" color="white">
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <RedditIcon />
                </ListItemIcon>
                <ListItemText primary="Top" />
              </MenuItem>
            </Link>
            <Link component={RouterLink} to="/Rising" color="white">
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <TrendingUpIcon />
                </ListItemIcon>
                <ListItemText primary="Rising" />
              </MenuItem>
            </Link>
          </Menu>
          <ListItemIcon>
            <SortIcon />
          </ListItemIcon>
          <ListItemText primary="Sort by" />
        </ListItem>
      </List>
      <Divider />
      {/* <List>
        <Link component={RouterLink} to="/Mail" color="white">
          <ListItem button text="Mail">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Mail" />
          </ListItem>
        </Link>
        <Link component={RouterLink} to="/Spam" color="white">
          <ListItem button text="Spam">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Spam" />
          </ListItem>
        </Link>
        <Link component={RouterLink} to="/Trash" color="white">
          <ListItem button text="Trash">
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Trash" />
          </ListItem>
        </Link>
      </List>
      <Divider /> */}
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
    </Drawer>
  );
};

export default BurgerMenu;
