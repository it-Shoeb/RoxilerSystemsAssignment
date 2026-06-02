import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router'

const Navbar = () => {

    const navigate = useNavigate()

    const [Action, setAction] = useState("hidden")
    const [FormVisible, setFormVisible] = useState("hidden")

    const resetPassword = (e) => {
        e.preventDefault();

        const newPassword = e.target[0].value

        setFormVisible("hidden")
    }

    const logOut = () => {
        navigate("/")
    }

    return (
        <>
            <nav className="px-8 py-4 relative">
                <div className="flex justify-between items-center">

                    <div className="flex space-x-4">
                        <div>
                            <span className="font-bold flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">Roxiller System</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-1 gap-4">
                            <Link to={"/usersdashboard"}>Users</Link>
                            <Link to={"/storedashboard"}>Stores</Link>
                        </div>
                    </div>

                    <div className="p-4 rounded-full bg-gray-400 relative" onClick={() => setAction(Action == "hidden" ? "block" : "hidden")}>
                        <ul className={`absolute right-0 top-10 bg-gray-200 rounded-md z-2 ${Action} w-45`}>
                            <li className='border-b-1 px-2 py-4 bg-gray-300 rounded-md'>{"Username"}</li>
                            <li className='border-b-1 px-2 py-4 hover:bg-gray-400 rounded-md' onClick={(e) => {
                                setFormVisible("block")
                            }}>Reset Password</li>
                            <li className='border-b-1 px-2 py-4 hover:bg-gray-400 rounded-md' onClick={() => {
                                logOut();
                            }}>Log Out</li>
                        </ul>
                    </div>


                </div>

                <form action="" className={`p-4 bg-gray-200 absolute left-1/2 top-100 -translate-1/2 z-2 w-1/2 flex items-center- justift-center gap-4 ${FormVisible} flex flex-col`} onSubmit={(e) => {
                    resetPassword(e)
                }}>
                    <input className='px-2 py-4 w-full bg-white' type="text" placeholder="Reset Password" />
                    <input className='bg-blue-500 px-2 py-4 rounded-md text-white font-bold' type="submit" value="Reset Password" />
                    <button className="bg-red-500 px-2 py-4 rounded-md text-white font-bold" onClick={() => {
                        setFormVisible("hidden")
                    }}>Cancel</button>
                </form>
            </nav>


            <Outlet />
        </>
    )
}

export default Navbar
