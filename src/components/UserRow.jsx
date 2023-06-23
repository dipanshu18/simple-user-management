import { FaTrash } from "react-icons/fa";
import UpdateUser from "./UpdateUser";

export default function UserRow({ user }) {
  return (
    <>
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
          <UpdateUser />
        </td>
        <td>
          <button className="btn btn-danger">
            <FaTrash />
          </button>
        </td>
      </tr>
    </>
  );
}
