import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
// map works as a iterator. It iterates through the elements in list and converts javascript to jsx.
const ContactList = (props) => {
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
      <div className="ui celled List"> {renderContactList} </div>
    </div>
  );
};

export default ContactList;
