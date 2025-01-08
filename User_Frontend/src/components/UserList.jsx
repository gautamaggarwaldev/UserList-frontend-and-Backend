// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {

    const [users, setUser] = useState([]); // useState hook to store user coming from the DB into this array

    useEffect(() => {
        getUsers();
    },[])

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUser(response.data);
    }

    const deleteUser = async (id) => {
        try{
            await axios.delete(`http://localhost:5000/users/${id}`);    
            getUsers();
        }
        catch(error) {
            console.log(error);
        }
    }

    return(
        <>
            <Link to="add">
                Add new User 
            </Link>

            <table>
                <thead>
                    <tr>
                        <th> No. </th>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Gender </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (

                        <tr key = {user._id}>
                            <td> {index+1} </td>
                            <td> {user.name} </td>
                            <td> {user.email} </td>
                            <td> {user.gender} </td>
                            <td> 
                                <Link to={`edit/${user._id}`}><button className='button is-danger mr-2'>Edit</button></Link>
                                <button onClick={() => deleteUser(user._id)} className='button is-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default UserList;