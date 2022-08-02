import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import React, { useState, useEffect } from "react";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "../firebase";

function EmaiList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList-settings">
        <div className="emailList-settingsLeft">
          <IconButton>
            <Checkbox />
          </IconButton>
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="emailList-settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <ArrowDropDown />
          </IconButton>
        </div>
      </div>

      <div className="emailList-sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="social" color="#1a73e8" />
        <Section Icon={LocalOffer} title="promotions" color="green" />
      </div>

      <div className="email-list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!!!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!!!"
          description="this is a test "
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!!!"
          description="this is a test "
          time="10pm"
        />{" "}
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!!!"
          description="this is a test "
          time="10pm"
        />{" "}
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!!!"
          description="this is a test "
          time="10pm"
        />{" "}
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!!!"
          description="this is a test "
          time="10pm"
        />{" "}
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!!!"
          description="this is a test "
          time="10pm"
        />{" "}
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!!!"
          description="this is a test "
          time="10pm"
        />{" "}
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!!!"
          description="this is a test "
          time="10pm"
        />{" "}
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!!!"
          description="this is a test "
          time="10pm"
        />{" "}
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!!!"
          description="this is a test "
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmaiList;
