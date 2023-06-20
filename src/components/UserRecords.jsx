import { FaPen, FaTrash } from "react-icons/fa";

export default function UserRecords() {
  return (
    <div>
      <hr />
      <h5 className="text-center m-4">User Records</h5>
      <table className="table table-info table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No.</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <a href="#">
                <FaPen />
              </a>
            </td>
            <td>
              <a href="#">
                <FaTrash />
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <a href="#">
                <FaPen />
              </a>
            </td>
            <td>
              <a href="#">
                <FaTrash />
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <a href="#">
                <FaPen />
              </a>
            </td>
            <td>
              <a href="#">
                <FaTrash />
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <a href="#">
                <FaPen />
              </a>
            </td>
            <td>
              <a href="#">
                <FaTrash />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
