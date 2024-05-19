import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
    const [user, setUser] = useState([
        {
            name: "balakrishna",
            Email: "balakrishna0014@gmail.com",
            Age: 30,
        },
    ]);

    useEffect(()=>{
        axios.get('http://localhost:3001/')
        .then(result => setUser(result.data))
        .catch(err => console.log("err:",err))
    })
    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/'+id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-50 bg-white rounded p-3 ">
                    <Link to="/create" className="btn btn-outline-primary ">Add +</Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((user) => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Age}</td>
                                    <td>
                                        <Link to={`/Update/${user._id}`} className="btn btn-outline-success ">Update</Link>
                                        <button className="btn btn-outline-danger mx-2 " onClick={(e)=> handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default User;
