import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditContact = ({ UpdateContactHandler }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, email } = location.state.contact;
  const [newEmail, setNewEmail] = useState(email);
  const [newName, setNewName] = useState(name);
  // const { updateContactHandler } = useContactsCrud();

  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    UpdateContactHandler(id, { name: newName, email: newEmail });
    setNewName("");
    setNewEmail("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;

// const EditContact = ({ UpdateContactHandler }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//     const location = useLocation();

//   const [contactState, setContactState] = useState({
//     id: location.state.contact.id,
//     name: location.state.contact.name,
//     email: location.state.contact.email,
//   });
//   const navigate = useNavigate();

//   const update = (e) => {
//     e.preventDefault();

//     if (name === "" || email === "") {
//       alert("Every field is mandatory");
//       return;
//     }

//     UpdateContactHandler({ ...contactState, name, email });
//     setName("");
//     setEmail("");
//     navigate("/");
//   };

//   return (
//     <div className="ui main">
//       <h2> Update contact </h2>
//       <form className="ui form" onSubmit={update}>
//         <div className="field">
//           <label> Name </label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="field">
//           <label> Email </label>
//           <input
//             type="Email"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button className="ui button blue"> Update </button>
//       </form>
//     </div>
//   );
// };

// export default EditContact;
