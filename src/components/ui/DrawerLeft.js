import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: prop => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  height: 85,
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  height: 85,
}));

const DrawerLeft = ({ name }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [nestesListOpen, setNestesListOpen] = useState(true);

  const handleClick = () => {
    setNestesListOpen(!nestesListOpen);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon style={{ fontSize: "50px" }} />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Okta Mate
          </Typography>
          <Box sx={{ flexGrow: 15 }} />
          {/* <Box sx={{ flexGrow: 1, display: "inline" }}>
            <Typography style={{ display: "flex", marginLeft: "25px" }}>
              Okta URI
            </Typography>
            <Select
              value=""
              displayEmpty
              style={{
                backgroundColor: "white",
                width: "200px",
                height: "40px",
                outline: "none",
              }}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="1">
               {name}
              </MenuItem>
              <MenuItem value="2">
                {name}
              </MenuItem>
              <MenuItem value="3">
                {name}
              </MenuItem>
            </Select>
          </Box> */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              component={Link}
              to="/login"
            >
              <AccountCircle style={{ fontSize: "50px" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
        // sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        // component="nav"
        // aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
        >
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <DashboardIcon style={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AppsIcon style={{ fontSize: "35px" }} />
            </ListItemIcon>
            <ListItemText primary="APPS" />
            {nestesListOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={nestesListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/samlspp">
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="SAML APP" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }} component={Link} to="/oidcapp">
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="OIDC APP" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton component={Link} to="/idp">
            <ListItemIcon>
              <SendIcon style={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText primary="IDP" />
          </ListItemButton>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
};

export default DrawerLeft;
