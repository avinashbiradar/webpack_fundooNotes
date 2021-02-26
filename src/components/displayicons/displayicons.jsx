import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import "../displayicons/displayicons.scss";
// import { deleteNotes ,ArchiveNotes,changeColor } from "../../services/userservice";
const useStyles = makeStyles((theme) => ({
  colorMenu: {
    width: "130px",
    height: "90px",
    display: "flex",
    flexFlow: " column wrap",
  },
  colorButton: {
    margin: "2px",
    width: "5px",
    height: "5px",
    "&:hover": {
      border: "black 2px solid",
    },
  },
}))
const DisplayIcons = (props) => {
  const classes = useStyles();
  const [trash, setTrash] = React.useState(props.trash);
  const [noteId, setNoteId] = React.useState(props.editId);
  const [title, settitle] = React.useState(props.editTitle);
  const [description, setdescription] = React.useState(props.editDisc);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [edit, setEdit] = React.useState(props.setEdited);
  const colorsHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const colorsHandleClose = () => {
    setAnchorEl(null);
  };
  const passColor = (e, colr) => {
    e.stopPropagation();
    // if (edit) {
      let data = {
        color: colr,
        noteIdList: [noteId],
      };
    changeColor(data)
        .then((data) => {
          console.log("Update Color: " + data);
          console.log(colr);
          props.getall();
        })
        .catch((err) => {
          console.log("Update Color Error = " + err);
        });
    // }

      props.setClr(colr);
  };

  const colors = [
    { color: "#fafafa" },
    { color: "#ef9a9a" },
    { color: "#ffcc80" },
    { color: "#fff59d" },
    { color: "#dcedc8" },
    { color: "#b2dfdb" },
    { color: "#e0f7fa" },
    { color: "#4fc3f7" },
    { color: "#b39ddb" },
    { color: "#f8bbd0" },
    { color: "#a1887f" },
    { color: "#cfd8dc" },
  ];

  const deleteHandleOpen = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const deletesHandleClose = () => {
    setAnchorE2(null);
  };

  const deleted = () => {
    let data = {
        noteIdList:[props.noteobject.id],
        isDeleted:true,
    };
    console.log(data)
    deleteNotes(data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("error = " + err);
      });
    setAnchorE2(null);
   
   };
  
   const archive = () => {
    let data = {
        noteIdList:[props.noteobject.id],
        isArchived:true,
    };
    console.log(data)
    ArchiveNotes(data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("error = " + err);
      });
   };

   const ColorBlock = () => {
    return (
      <div className={classes.colorMenu} onMouseLeave={colorsHandleClose}>
        {colors.map((color) => (
          <IconButton
            className={classes.colorButton}
            onClick={(e) => passColor(e, color.color)}
            style={{ backgroundColor: color.color }}
          ></IconButton>
        ))}
      </div>
    );
  };

  return (
    <div className="tools">
      <IconButton aria-label="Remind me" edge="start">
        <AddAlertOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="Collaborator">
        <PersonAddOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="Change color" onMouseOver={colorsHandleClick}>
        <ColorLensOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="Add image">
        <ImageOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="Archive note">
        <ArchiveOutlinedIcon fontSize="small"  onClick={archive} />
      </IconButton>
      <IconButton aria-label="More">
        <MoreVertOutlinedIcon fontSize="small" onClick={deleteHandleOpen} />
      </IconButton>
      <div
      className={classes.colorWindow}
      style={{ display: open ? "block" : "none" }}
      onClick={colorsHandleClose}
    >
      <Paper open={Boolean(open)}>
        <Menu
          open={Boolean(open)}
          className={classes.colorPaper}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
        >
          <ColorBlock className="colorBlock" />
        </Menu>
      </Paper>
    </div>
      <div>
        <Paper>
          <Menu
            anchorEl={anchorE2}
            open={Boolean(anchorE2)}
            onClose={deletesHandleClose}
          >
            <MenuItem onClick={deleted}>Delete</MenuItem>
          </Menu>
        </Paper>
      </div>
    </div>
  );
};

export default DisplayIcons;
