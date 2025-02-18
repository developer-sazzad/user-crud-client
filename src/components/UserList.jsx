import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const UserList = () => {
    const userDataList = useLoaderData();
    const [users, setUser] = useState(userDataList);

    const handleDelete = (_id) => {
        console.log(_id)

        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount === 0) {
                    alert('User Deleted Successfully.')
                    const remaining = users.filter(user => user._id !== _id);
                    setUser(remaining);
                } else {
                    alert('Sorry............... cannot delete user.');
                }
            })
    };
   
    return (
        <div>
            <Header></Header>
            <h1 className='text-3xl text-center my-10 font-bold'>User List</h1>
            <div className="container mx-auto my-10">
                <div className="max-w-4xl mx-auto overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>CRUD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(usersDetails => <tr key={usersDetails._id}>
                                    <td>
                                        {usersDetails._id}
                                    </td>
                                    <td>{usersDetails.name}</td>
                                    <td>{usersDetails.email}</td>
                                    <td>
                                        <button className="btn"
                                            onClick={() => handleDelete(usersDetails._id)}>Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default UserList;