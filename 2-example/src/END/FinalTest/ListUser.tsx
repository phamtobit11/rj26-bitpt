import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import styles from "./styles.module.css";


function ListUser() {
  const [listUser, setListUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getListUser();
  }, []);
  const getListUser = () => {
    fetch(
      "https://634ea1bc4af5fdff3a62a273.mockapi.io/user?page=1&limit=10",

      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setListUser(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const gotocreate = () =>{
    navigate('/form')
  }
  const handleDelete = (userid: any) => {
    fetch("https://634ea1bc4af5fdff3a62a273.mockapi.io/user/" + userid, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        getListUser();
        //   setListUser(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <div className={styles.main}>
      <div className={styles.table}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {listUser.map((user: any) => {
              return (
                <tr key={`user-${user.id}`}>
                  <th>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                  <td>
                    <button
                      className={styles.btn1}
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button className={styles.btnCre} onClick={() => gotocreate()}>Create</button>
    </div>
  );
}

export default ListUser;
