import React, { useEffect, useState } from 'react'

function ListUser() {
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        getListUser();
    },[]);
    const getListUser = () =>{
        fetch(
            "https://634ea1bc4af5fdff3a62a273.mockapi.io/person?page=1&limit=10",
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

    const handleDelete = (userid : any)=>{
        fetch(
            "https://634ea1bc4af5fdff3a62a273.mockapi.io/person/" + userid,
            {
              method: "DELETE",
            }
          )
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
    <div>
        <table className='table'>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">ADDRESS</th>
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
                    <button>
                        Details
                    </button>
                    <button onClick={() => handleDelete(user.id)}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    })}
  </tbody>
</table>
    </div>
  )
}

export default ListUser