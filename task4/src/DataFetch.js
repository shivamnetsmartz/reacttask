import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'



function DataFetch() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    let history = useHistory();

    console.log(history)


    return (

        <div className="table-container">

            <h1 className="heading">Records of Products</h1>
            {
                users.map(user =>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>GET BUTTON</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="id">{user.id}</td> <td data-label="title">{user.title}</td>
                               
                                <td data-label="button">  <button className="btn btn-primary" onClick={() => {

                                    history.push(`/userDetails/${user.id}`)
                                }}>Get Details</button></td>

                            </tr>


                        </tbody>
                    </table>,


                )
            }
        </div>

    )
}

export default DataFetch
