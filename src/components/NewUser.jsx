import { createNewUser } from "../store/user-actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";
import "./NewUser.css";

const NewUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [PIN, setPIN] = useState("");
  const [company, setCompany] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const requestObject = {
      name,
      username: userName,
      email,
      address: { zipcode: PIN },
      company: { name: company },
    };
    dispatch(createNewUser(requestObject));
    setName("");
    setUserName("");
    setEmail("");
    setCompany("");
    setPIN("");
    dispatch(userActions.setNewUserState("false"));
  }

  return (
    <form onSubmit={handleSubmit} className="newUser-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="UserName"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@gy.com"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="CompanyName"
      />
      <input
        type="text"
        value={PIN}
        onChange={(e) => setPIN(e.target.value)}
        placeholder="Pin code"
      />
      <button type="submit">Create User</button>
    </form>
  );
};

export default NewUser;
