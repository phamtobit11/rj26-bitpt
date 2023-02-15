import React, { useState } from 'react'

function TestOn() {

    const [name, setName] = useState<string>();
    const [age, setAge] = useState<number>();
    const [address, setAddress] = useState<string>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Name:", name);
        console.log("Gender:", age);
        console.log("Address:", address);
    }

  return (
    <div className=" d-flex justify-content-center m-3">
      <div className="border border-light rounded p-3">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <input
            placeholder="Age"
            type="text"
            value={age}
            onChange={(e) => {
              setAge(parseInt(e.target.value));
            }}
          />
          <br />
          <input
            placeholder="Address"
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default TestOn