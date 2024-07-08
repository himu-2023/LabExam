import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function Read() {
  const navigate = useNavigate();
  const [students, setSetudents] = useState([]);

  const getStudents = () => {
    axios.get(`http://localhost:9595/user/all`)
      .then((response) => {
        console.log(response.data);
        setSetudents(response.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  const handleRegister = () => {
    // console.log(767);
    navigate('/create');
  }

  const handleLocalStorage = (id,name,userName,pass) => {
    // console.log(id,name,userName,pass);
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("addr", addr);
    localStorage.setItem("stream", stream);
    localStorage.setItem("year", year);
  }

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      <div className="container mt-3 mb-3">
        <button className="btn btn-info m-2" onClick={handleRegister}>
          Register
        </button>
        <h3>Students</h3>
        <div className="row mt-3 mb-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Stream</th>
                <th scope="col">Year</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {students.map((students) => {
                return (
                  <tr>
                    <td>{students.id}</td>
                    <td>{students.name}</td>
                    <td>{students.addr}</td>
                    <td>{students.stream}</td>
                    <td>{students.year}</td>
                    <td>
                      <Link to="/update">
                        <button
                          className="btn btn-success"
                          onClick={() =>
                            handleLocalStorage(
                             students.id,
                             students.name,
                              students.addr,
                              students.stream,
                              students.year
                            )
                          }
                        >
                          Update
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

