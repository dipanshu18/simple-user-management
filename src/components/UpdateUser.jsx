import { FaPen } from "react-icons/fa";

export default function UpdateUser() {
  return (
    <div className="">
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#addUserModal"
      >
        <FaPen />
      </button>

      <div
        className="modal fade"
        id="addUserModal"
        aria-labelledby="addUserModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addUserModalLabel">
                Add necessary details to create user...
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-inputs mb-3 d-flex justify-content-center">
                  <label>Name</label>
                  <input className="ms-5" type="text" />
                </div>
                <div className="form-inputs mb-3 d-flex justify-content-center">
                  <label>E-mail</label>
                  <input className="ms-5" type="email" />
                </div>
                <div className="form-inputs mb-3 d-flex justify-content-center">
                  <label>Phone</label>
                  <input className="ms-5" type="tel" />
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
