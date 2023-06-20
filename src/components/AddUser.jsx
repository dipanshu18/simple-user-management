import { useState } from "react";
import { FaUser } from "react-icons/fa";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(`${name}, ${email}, ${phone}`);
  };
  return (
    <div className="my-4 d-flex justify-content-center">
      <button
        type="button"
        className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
        data-bs-toggle="modal"
        data-bs-target="#addUserModal"
      >
        <FaUser /> Add User
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
              <form onSubmit={addUserHandler}>
                <div className="form-inputs mb-3 d-flex justify-content-center">
                  <label>Name</label>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="ms-5"
                    type="text"
                  />
                </div>
                <div className="form-inputs mb-3 d-flex justify-content-center">
                  <label>E-mail</label>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="ms-5"
                    type="email"
                  />
                </div>
                <div className="form-inputs mb-3 d-flex justify-content-center">
                  <label>Phone</label>
                  <input
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    className="ms-5"
                    type="tel"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
