import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../store/user-actions";
import "./EditUser.css";

const EditUser = ({ userId, onClose }) => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) =>
    state.user.userList.find((user) => user.id === userId)
  );

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [zipcode, setZipcode] = useState("");

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setUsername(selectedUser.username);
      setEmail(selectedUser.email);
      setCompany(selectedUser.company.name);
      setZipcode(selectedUser.address.zipcode);
    }
  }, [selectedUser]);

  const handleSave = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...selectedUser,
      name,
      username,
      email,
      company: { name: company },
      address: { zipcode },
    };
    dispatch(editUser(updatedUser));
    onClose();
  };

  return (
    <form onSubmit={handleSave} className="editUser-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
      />
      <input
        type="text"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
        placeholder="Zipcode"
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default EditUser;
