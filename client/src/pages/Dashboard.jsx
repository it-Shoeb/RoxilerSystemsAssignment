import React from 'react'
import Userform from '../components/Userform'

import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Dashboard = () => {
    const [isHidden, setisHidden] = useState("hidden")
    const [Users, setUsers] = useState([])

    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        try {
            const res = await axios.get("http://localhost:5000/authenticate/getUsers")
            setUsers(res.data.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const createUser = async (e) => {
        e.preventDefault()

        const name = e.target[0].value
        const address = e.target[1].value
        const email = e.target[2].value
        const role = e.target[3].value

        try {
            const res = await axios.post("http://localhost:5000/authenticate/createUser", { name, address, email, role })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const onHandleClick = (e) => {
        const label = e.target.innerText;
    }

    return (
        <>
            <div className="dashboard m-9 relative">

                <div className={`wrapper absolute w-screen ${isHidden}`}></div>

                <div className={`${isHidden} absolute left-1/2 top-1/2 border flex -translate-1/2 bg-white z-2 w-1/3 flex justify-center rounded-md`}>
                    <form action="" className='flex flex-col gap-8 p-8 w-full' onSubmit={(e) => {
                        createUser(e)
                    }}>
                        <input type="text" className='px-4 py-2 border rounded-md' placeholder="Enter  Name" />
                        <input type="text" className='px-4 py-2 border rounded-md' placeholder="Enter Address" />
                        <input type="text" className='px-4 py-2 border rounded-md' placeholder="Enter Email Address" />
                        <select name="" id="" className='px-4 py-2 border rounded-md'>
                            <option value="admin" disabled>Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        <div className="flex gap-2">
                            <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => {
                                setisHidden("hidden")
                            }}>Cancel</button>
                            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => {
                                setisHidden("hidden")
                            }}>Add User</button>
                        </div>
                    </form>
                </div>

                <div className="action bar flex justify-between items-center p-4">
                    <p className="font-bold font-xl">Users</p>
                    <div className="action-btn flex gap-4">

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => {
                            setisHidden("")
                        }}>Add User</button>
                    </div>
                </div>


                <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default bg-greay p-4 rounded-md">
                    <table className="w-full text-sm text-left rtl:text-right text-body">
                        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-medium" onClick={(e) => onHandleClick(e)}>
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium" onClick={(e) => onHandleClick(e)}>
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium" onClick={(e) => onHandleClick(e)}>
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium" onClick={(e) => onHandleClick(e)}>
                                    Role
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {Loading ? <span className='absolute left-1/2'>Loading...</span> : Users.map((user) =>
                                < tr className="bg-neutral-primary border-b border-default" >
                                    <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                        {user.name}
                                        {console.log(user)}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.address}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.role}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div >

        </>
    )
}

export default Dashboard
