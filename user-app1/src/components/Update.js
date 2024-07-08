import React, { useRef, useState } from "react";
import axios from "axios";
export default function Update() {
  const [s_id, setID] = useState("");
  const [s_studentName, setSetudents] = useState("");

  let id = localStorage.getItem("id");
  let name = localStorage.getItem("name");
  let addr = localStorage.getItem("addr");
  let stream = localStorage.getItem("stream");
  let year = localStorage.getItem("year");
  console.log(id, name, addr, stream, year);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(s_id, s_studentName);
    axios
      .put(`http://localhost:9595/students/update/${id}`, {
        id: s_id,
        name: s_studentName,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container mt-3 mb-3">
        <form className="myForm p-3">
          <div className="text-center">
            <h2>Update Student</h2>
          </div>
          <div class="mb-3">
            <label class="form-label">Id</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputId"
              onChange={(e) => {
                setID(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              onChange={(e) => {
                s_studentName(e.target.value);
              }}
            />
          </div>
          <button type="submit" class="btn btn-primary" onClick={handleUpdate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
