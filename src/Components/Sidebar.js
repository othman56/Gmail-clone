import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import { Button, IconButton } from "@mui/material";
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<Add fontSize="Large" />}
        className="sidebar-compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOptions Icons={Inbox} title="inbox" number={54} selected={true} />
      <SidebarOptions Icons={Star} title="starred" number={54} />
      <SidebarOptions Icons={AccessTime} title="snoozed" number={54} />
      <SidebarOptions Icons={LabelImportant} title="Important" number={54} />
      <SidebarOptions Icons={NearMe} title="sents" number={54} />
      <SidebarOptions Icons={Note} title="Drafts" number={54} />
      <SidebarOptions Icons={ExpandMore} title="More" number={54} />

      <div className="sidebar-footer">
        <div className="sidebar-footer-icons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
