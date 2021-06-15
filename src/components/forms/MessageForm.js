import React, { useState } from "react";
// import Message from "../utils/messages";

// sends messages
const MessageForm = (props) => {
  console.log("form prop: ", props);
  const [list, setList] = useState({
    message: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.value);
    console.log("list: ", list);
    setList({
      ...list,
      [e.target.message]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.sendMessage(list);
    setList({ message: "", email: "", role: "" });
  };

  return (
    <form classmessage="form" onSubmit={submitForm}>
      <label classmessage="message labels" htmlFor="message">
  join in chat
      </label>
      <input
        type="text"
        message="name"
        value={list.name}
        onChange={changeHandler}
      />
      <button classmessage="button" type="submit">
        &gt;
      </button>
    </form>
  );
};
export default MessageForm;