import React, { useState } from "react";
import styles from "./styles.module.css";
function FormUser() {
  const [userName, setName] = useState<string>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("name: " + userName);

    let data = {
        name: userName,
      };
      postUser(data)
  };

  const postUser = (data : any) => {
    fetch("https://634ea1bc4af5fdff3a62a273.mockapi.io/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((res) => console.log(res))
        .catch((error) => {
            console.error("Error:", error);
        });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case "userName":
        setName(e.target.value);
        break;
      
      default:
        break;
    }
  };

  return (
    <form
      className=" d-flex justify-content-center m-3"
      onSubmit={handleSubmit}
    >
      <div className="border border-range rounded p-3">
        <input
          placeholder=""
          type="text"
          name="userName"
          value={userName ? userName : ""}
          onChange={handleChange}
        />
        <hr />
        <button className= {styles.btn2} type="submit">Create</button>
      </div>
    </form>
  );
}

export default FormUser;
