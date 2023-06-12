import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "../../App.css";
import "./Sidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Routing from "./Routing/Routing";
import InfoList from "./InfoList/InfoList";
import SocialMedia from "./socialmedia/SocialMedia";
import { useMediaQuery } from "@mui/material";

const drawerWidth = 235;

function Sidebar(props) {
  console.log(props);

  const { window } = props;
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <div className="drawer">
      <div className="sidebar-header text-center mt-5 ">
        <h5>SOFTWARE ENGINEER</h5>
      </div>
      <Toolbar />

      <Divider />
      <List>
        <InfoList handleDrawerClose={handleDrawerClose} />
        <ListItem disablePadding>
          <button onClick={props.toggleTheme} className=" mt-5  btn">
            <ListItemIcon>
              {props.theme === "dark" ? (
                <DarkModeIcon className="mx-1 list-btn " />
              ) : (
                <LightModeIcon className="mx-1 list-btn" />
              )}
              <div className="mx-2 list-btn">
                {props.theme === "dark" ? "Light Mode" : "Dark Mode"}
              </div>
            </ListItemIcon>
          </button>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="nav-bar"
        style={{ boxShadow: "none" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div"> */}
          <div className="w-100">
            <SocialMedia />
          </div>
          {/* </Typography> */}
        </Toolbar>
      </AppBar>
      <Box
        className="sidebar"
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        className="main"
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routing theme={props.theme} />
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
