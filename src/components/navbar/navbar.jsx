import React from "react";
import { Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import SettingsSharpIcon from "@material-ui/icons/SettingsOutlined";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import icon from "../assests/keep.svg";
import "../navbar/navbar.scss";
import Sidebar from "../SideBar/sidebar";
import Notes from "../notes/notes"
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }
  handleDrawerOpen = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  updateModal(isVisible) {
    this.state.isVisible = isVisible;
  }

  render() {
    return (
      <div className="main">
        <AppBar position="fixed" color="transparent">
          <Toolbar className="topBar">
            <div className="startOptions">
              <div className="menuButton">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={this.handleDrawerOpen}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <div className="headerIcon">
                <img className="headerIcon" src={icon} alt="image" />
              </div>

              <div className="headerTitle">
                <span style={{ color: "#0606f8" }}>F</span>
                <span style={{ color: "#d10303" }}>u</span>
                <span style={{ color: "#f0b000" }}>n</span>
                <span style={{ color: "#0606f8" }}>d</span>
                <span style={{ color: "green" }}>o</span>
                <span style={{ color: "#d10303" }}>o</span>
              </div>
            </div>
            <div className="search">
              <div className="searchIcon">
                <div className="searchIcon">
                  <SearchIcon />
                </div>
              </div>
              <InputBase
                className="searchInput"
                placeholder="Search…"
                classes={{
                  root: "inputRoot",
                  input: "inputInput",
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className="buttonContainer">
              <div className="button">
                <IconButton aria-label="open drawer">
                  <ReplayOutlinedIcon />
                </IconButton>
              </div>
              <div className="button">
                <IconButton aria-label="open drawer">
                  <DnsRoundedIcon />
                </IconButton>
              </div>
              <div className="button">
                <IconButton aria-label="open drawer">
                  <SettingsSharpIcon />
                </IconButton>
              </div>
              <div className="appsContainer">
                <div className="button">
                  <IconButton aria-label="open drawer">
                    <AppsRoundedIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <div className="sidebar">
          <Sidebar isVisibleDrawer={this.state.isVisible} />
        </div>
        <Notes/>
      </div>
    );
  }
}

// <Sidebar drawerOpenClose={open} />
// <Sidebar appBarProps={open} />
//<DisplayNote />  
// <AddNote />