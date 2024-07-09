import UserTable from "./components/UserTable";
// import NewUser from "./components/NewUser";
// import { useSelector } from "react-redux";

function App() {
  // const newUserState = useSelector((state) => state.user.newUserState);
  // console.log(newUserState);
  return (
    <>
      <UserTable />
      {/* {newUserState ? <NewUser /> : null} */}
    </>
  );
}

export default App;
