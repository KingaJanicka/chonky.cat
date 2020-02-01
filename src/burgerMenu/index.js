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
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <WhatshotIcon />
              </ListItemIcon>
              Hot
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <NewReleasesIcon />
              </ListItemIcon>
              New
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <RedditIcon />
              </ListItemIcon>
              Top
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <TrendingUpIcon />
              </ListItemIcon>
              Rising
            </MenuItem>
          </Menu>
          <ListItemIcon>
            <SortIcon />
          </ListItemIcon>
          <ListItemText primary="Sort by" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button text="Mail">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Mail" />
        </ListItem>
        <ListItem button text="Spam">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Spam" />
        </ListItem>
        <ListItem button text="Trash">
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button text="LEON">
          <ListItemIcon>
            <PetsIcon />
          </ListItemIcon>
          <ListItemText primary="LEON" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default BurgerMenu;
