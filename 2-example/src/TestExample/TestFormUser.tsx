import React, { useState } from "react";

function TestFormUser() {
  const [name, setName] = useState<string>();
  const [address, setAddress] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Name: " + name);
    console.log("Address: " + address);

    let data = { 
        name: name, 
        address: address 
    };
    postUser(data);
  };
  const postUser = (data: any) => {
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
      case "name":
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name ? name : ""}
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Address"
        value={address ? address : ""}
        name="address"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TestFormUser;
