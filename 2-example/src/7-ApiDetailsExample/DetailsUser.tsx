import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

interface IUser {
    name: string,
    avatar: string
}

function DetailsUser() {
    const [user, setUser] = useState<IUser>();
    let params = useParams();
    // console.log(params);

    useEffect(() => {
        getListUser(params.id);
    },[params.id]);

    const getListUser = (userId: string | undefined) => {
        fetch("https://634ea1bc4af5fdff3a62a273.mockapi.io/person/" + userId, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
                // setState listuser -> cpn re-render -> listuser = data
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <h1>Detail</h1>
            <p>{user?.name}</p>
            <p>{user?.avatar}</p>
        </div>
    );
}

export default DetailsUser;