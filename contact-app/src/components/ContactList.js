import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
// map works as a iterator. It iterates through the elements in list and converts javascript to jsx.
const ContactList = (props) => {
  console.log(props);
  // props stores all the props passing to the contact list
  const inputEl = useRef("");
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    // So here instead of writing jsx here we are creating another component to print each contact card details in list

    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div className="main">
      <h2>
        Contact list
        <Link to="/add">
          <button className="ui right floated primary button">
            Add Contact
          </button>
        </Link>
      </h2>
      <br></br>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="search Contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          ></input>
          <i className="search icon"></i>
        </div>
      </div>
      <br></br>
      <div className="ui celled List">
        {" "}
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts Available"}{" "}
      </div>
    </div>
  );
};

export default ContactList;
