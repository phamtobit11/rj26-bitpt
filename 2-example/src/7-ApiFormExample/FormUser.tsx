import React, { useState } from "react";

function FormUser() {
  const [userName, setName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("name: " + userName);
    console.log("address: " + address);

    let data = {
        name: userName,
        address: address,
      };
      postUser(data)
  };

  const postUser = (data : any) => {
    fetch("https://634ea1bc4af5fdff3a62a273.mockapi.io/person", {
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
      case "address":
        setAddress(e.target.value);
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
          placeholder="Name"
          type="text"
          name="userName"
          value={userName ? userName : ""}
          onChange={handleChange}
        />
        <hr />
        <input
          placeholder="Address"
          type="text"
          name="address"
          value={address ? address : ""}
          onChange={handleChange}
        />
        <hr />
        <button type="submit">submit</button>
      </div>
    </form>
  );
}

export default FormUser;
