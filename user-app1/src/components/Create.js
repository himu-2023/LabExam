import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Create() {
  const navigate = useNavigate();
  let id = useRef();
  let name = useRef();
  let addr = useRef();
  let stream = useRef();
  let year = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:9595/student/add`, {
        id: id.current.value,
        name: name.current.value,
        addr: addr.current.value,
        stream: stream.current.value,
        year: year.current.value,
      })
      .then((response) => {
        console.log(response.data);
        alert("Student added successfully!!");
        navigate("/read");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="container mt-3 mb-3">
        <form className="myForm p-3">
          <div className="text-center">
            <h2>Student Registration</h2>
          </div>
          <div class="mb-3">
            <label class="form-label">Id</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputId"
              ref={id}
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              ref={name}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Adddress</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputUserAddress"
              ref={addr}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Stream</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputStream"
              ref={stream}
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Year</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputYear"
              ref={year}
            />
          </div>
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
