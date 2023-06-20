import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import UserRecords from "./components/UserRecords";

export default function App() {
  return (
    <div className="container">
      <div className="container-fluid">
        <Navbar />
        <AddUser />
        <UserRecords />
      </div>
    </div>
  );
}
