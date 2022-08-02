import React from "react";
import { Close, Delete, MoreVert } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import "./sendMail.css";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import firebase from "firebase";

function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail" onSubmit={handleSubmit(onSubmit)}>
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form className="sendMail__form">
        <input
          type="email"
          {...register("to", { required: true })}
          placeholder="To"
        />
        {errors.To && <span className="send__mailError">To is required</span>}
        <input
          {...register("subject", { required: true })}
          placeholder="Subject"
        />
        {errors.Subject && (
          <span className="send__mailError">Subject required</span>
        )}
        <input
          {...register("message", { required: true })}
          placeholder="Message..."
          className="sendMail__Message"
        />
        {errors.Message && (
          <span className="send__mailError">Message is required</span>
        )}
        <div className="sendMail__option">
          <div className="sendMail__optionsLeft">
            <Button
              className="sendMail__send"
              variant="contained"
              color="primary"
              type="submit"
            >
              Send
            </Button>
          </div>
          <div className="sendMail__optionsRight">
            <IconButton>
              <MoreVert />
            </IconButton>
            <IconButton>
              <Delete />
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
