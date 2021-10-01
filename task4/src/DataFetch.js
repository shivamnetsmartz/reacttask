import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'



function DataFetch() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (

            <div>

                <h1>Records of Users</h1>
                {
                    users.map(user => 
                    <table>
                      <tr>
                          <th>ID</th>
                          <th>NAME</th>
                      </tr>
                      <tr>
                          <td>{user.id}</td>  
                          <td>{user.title}</td>
                         
                     </tr>
                     <Link className="btn btn-primary"to={`/userDetails/${user.id}`}>Get Details</Link>
                    </table>,
    
                    
                    )
                }
            </div>
       
    )
}

export default DataFetch
