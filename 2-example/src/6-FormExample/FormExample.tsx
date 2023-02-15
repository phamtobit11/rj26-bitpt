import React, { useState } from "react";

function FormExample() {
  const [userName, setName] = useState<string>();
  const [avata, setAvata] = useState<string>();
  const [address, setAddress] = useState<string>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("name: " + userName);
    console.log("avata: " + avata);
    console.log("address: " + address);
  };

  //Cách 1: đây là cách handle theo từng name khác nhau
  // const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value)
  //   setName(e.target.value)
  // };
  // const handleChangeAvata = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value)
  //   setAvata(e.target.value)
  // };
  // const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value)
  //   setAddress(e.target.value)
  // };

  // Cách 2: sẽ dùng switch case để set theo name
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case "userName":
        setName(e.target.value);
        break;
      case "avata":
        setAvata(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    // CÁCH 1...........
    // <form
    //   className=" d-flex justify-content-center m-3"
    //   onSubmit={handleSubmit}
    // >
    //   <div className="border border-range rounded p-3">
    //     <input
    //       placeholder="Name"
    //       type="text"
    //       value={name ? name : ""}
    //       onChange={handleChangeName}
    //     />
    //     <hr />
    //     <input
    //       placeholder="Avata"
    //       type="text"
    //       value={avata ? avata : ""}
    //       onChange={handleChangeAvata}
    //     />
    //     <hr />
    //     <input
    //       placeholder="Address"
    //       type="text"
    //       value={address ? address : ""}
    //       onChange={handleChangeAddress}
    //     />
    //     <hr />
    //     <button type="submit">submit</button>
    //   </div>
    // </form>

    // CÁCH 2...........
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
          placeholder="Avata"
          type="text"
          name="avata"
          value={avata ? avata : ""}
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

export default FormExample;
