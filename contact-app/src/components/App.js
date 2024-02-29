// package.json: Helps you and others understand what your house needs and gives some flexibility in choosing specific colors (versions) within a range.
// To create package json file we use npm init --yes command
//package-lock.json: Ensures everyone building your house gets the exact same colored bricks (versions) you used, preventing any mismatched pieces (compatibility issues) if someone else buys them.
// Comments are permitted in json files

import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import CardDetails from "./CardDetails";

function App() {
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Vennela",
  //     email: "vennela@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Spoorthy",
  //     email: "spoorthy@gmail.com",
  //   }, This is the manual way of giving contact details. But to take values from the users we have to implement functionalities.
  // ]; To implement functionalities we use react hooks(UseState).

  const LOCAL_STORAGE_KEY = "contacts";
  // This is the syntax to use useState
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  // usestate([]) inside the paranthesis we pass the initial value that we want to store in contacts
  // By using setContacts we will update the contacts value

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  // We are using this event handler to delete the contactlist
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // We are using this below to store the values entered in the form
  useEffect(() => {
    console.log("Inside set");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // We are using this below to print the values entered in the form on to the webpage
  // useEffect(() => {
  //   console.log("Inside get");
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  // if you want pass some information from parent to child we will use props.
  // if you want pass from child to parent we will use event handlers
  return (
    <div className="ui container">
      <Router>
        <Header> </Header>
        <br />
        <br />
        <br />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route path="/contact/:id" element={<CardDetails />} />
        </Routes>
      </Router>

      {/* <AddContact addContactHandler={addContactHandler}> </AddContact>
      <ContactList contacts={contacts} getContactId={removeContactHandler}>
        {" "}
      </ContactList> 
      we use the above code to render all components in on page */}
    </div>
  );
}

// If you want to pass anything from child to parent we use handlers

export default App;
// So in our project we added all our componnets in one page. But by using route we can modify our url so that if we write /add at the end
// of the url add component can be displayed. if there are two url's one with /add and the other with / if you type localhost:3000 then both the
// components will be appended in the page because both the url's has / in common.
// So to get out of that situation we can use switch.

// So by using switch if /add is found first it will stop searching for other urls.
// Let's say we are searching for / and we found /add first as / is common it will stop at /add
// BUt that's not our desired page. So solve that problem we have to use the keyword "exact"

// switch is for older versions of react now it got updated to routes

// In server-api db.json file - In this file we are going to create our resource which will be a json object
