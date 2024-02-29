// Creating a component using class. So in class component we can't jst direvtly use return we have to use the render() function
// import React from "react";
// import { useNavigate } from "react-router-dom";

// class AddContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//   };
//  const navigate = useNavigate();

//   add = (e) => {
//     // e.preventdefault(); //We are using this to prevent page refresh

//     if (this.state.name === "" || this.state.email === "") {
//       alert("Every field is mandatory");
//       return;
//     }

//     e.preventDefault();
//     this.props.addContactHandler(this.state);
//     this.setState({ name: "", email: "" });
//
//     navigate("/");
//   };

//   render() {
//     return (
//       <div className="ui main">
//         <h2> Add contact </h2>
//         <form className="ui form" onSubmit={this.add}>
//           <div className="field">
//             <label> Name </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             ></input>
//           </div>
//           <div className="field">
//             <label> Email </label>
//             <input
//               type="Email"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             ></input>
//           </div>
//           <button className="ui button blue"> Add </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddContact;

// below code is using functional component. we changed our code from class component to functional
// component because Hooks (useNavigate) can only be used in functional components or custom hooks, not in class components.

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("Every field is mandatory");
      return;
    }

    addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2> Add contact </h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label> Name </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label> Email </label>
          <input
            type="Email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue"> Add </button>
      </form>
    </div>
  );
};

export default AddContact;
