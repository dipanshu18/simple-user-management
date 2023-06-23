import UserRow from "./UserRow";
import { useSelector } from "react-redux";

export default function UserRecords() {
  const users = useSelector((state) => state.users);
  return (
    <div>
      <hr />
      <h5 className="text-center m-4">User Records</h5>
      <table className="table table-info table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No.</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {users && users.map((user) => <UserRow user={user} key={user.id} />)}
        </tbody>
      </table>
    </div>
  );
}
