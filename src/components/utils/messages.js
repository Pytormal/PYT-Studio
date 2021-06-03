import React from "react";

// recieves/ shows messages


const Message = (props) => {
  console.log("team props: ", props);

  return (
    <div className="member-list">
        <div className="ul">
          <li>
            <h2 className="Lables1">
              Name: <span className="labels2"></span>
            </h2>
          </li>
        </div>
    </div>
  );
};
export default Message;
