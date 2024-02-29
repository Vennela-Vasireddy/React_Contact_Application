import React from "react";
import user from "../Images/user.webp";
import { Link } from "react-router-dom";
// when we want to pass anything from parent to child we use props.
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user"></img>
      <div className="content">
        {/* // In React, you need to use backticks (``) for template literals,
        // The warning is indicating that there is an unexpected template string expression inside a string on line 11. 
         */}
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
