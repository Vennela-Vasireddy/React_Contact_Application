//Creating a component using function
import React from "react";
// If we want to call this function we have to use this Variable_name()
// That is the varaible we used that is header()
const Header = () => {
  return (
    //we use className as property instead of class bcuz in jsx class is a keyword to define a class
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2> Contact Manager </h2>
      </div>
    </div>
  );
};

export default Header;
// We have to export the same varaible we are using to return
