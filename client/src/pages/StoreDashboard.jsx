import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

const StoreDashboard = () => {
    const [isHidden, setisHidden] = useState("hidden")
    const [Stores, setStores] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        getStores()
    }, [])


    const getStores = async () => {
        try {
            const res = await axios.get("http://localhost:5000/data/getStore");
            setStores(res.data.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const createStore = async (e) => {
        e.preventDefault();

        const storeName = e.target[0].value
        const storeAddress = e.target[1].value
        const storeEmail = e.target[2].value

        try {
            await axios.post("http://localhost:5000/authenticate/createStore", { storeName, storeAddress, storeEmail })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="dashboard m-9 relative">
                <div className={`wrapper absolute h-1/3 w-screen ${isHidden}`}></div>

                <div className={`${isHidden} absolute left-1/2 top-1/2 border flex -translate-1/2 bg-white z-2 w-1/3 flex justify-center rounded-md`}>
                    <form action="" className='flex flex-col gap-8 p-8 w-full' onSubmit={(e) => {
                        createStore(e)
                    }}>
                        <input type="text" className='px-4 py-2 border rounded-md' placeholder="Enter User Name" />
                        <input type="text" className='px-4 py-2 border rounded-md' placeholder="Enter User Address" />
                        <input type="text" className='px-4 py-2 border rounded-md' placeholder="Enter User Email Address" />
                        <div className="flex gap-2">
                            <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => {
                                setisHidden("hidden")
                            }}>Cancel</button>
                            <input type="submit" value="Add Store" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => {
                                setisHidden("hidden")
                            }} />
                        </div>
                    </form>
                </div>

                <div className="action bar flex justify-between items-center p-4">
                    <p className="font-bold font-xl">Stores</p>
                    <div className="action-btn flex gap-4">

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => {
                                setisHidden("")
                            }}
                        >Add Store</button>

                    </div>
                </div>


                <div className="relative overflow bg-neutral-primary-soft shadow-xs rounded-base border border-default bg-greay p-4 rounded-md">
                    <table className="w-full text-sm text-left rtl:text-right text-body">
                        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Store name
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Rating
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {Loading ? <span className='absolute left-1/2'>Loading...</span> : Stores.map((store) =>

                                <tr className="bg-neutral-primary border-b border-default">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                        {console.log(store)}
                                        {store.storeName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {store.storeAddress}
                                    </td>
                                    <td className="px-6 py-4">
                                        {store.storeEmail}
                                    </td>

                                    <td className="px-6 py-4">
                                        <select name="" id="" onChange={(e) => console.log(e.target.parentElement.parentElement)}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>

            </div>

        </>
    )
}

export default StoreDashboard
