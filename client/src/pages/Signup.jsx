import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from "react-router";

function Signup() {

  const navigate = useNavigate()

  const formSubmission = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const address = e.target[2].value;
    const password = e.target[3].value;

    console.log({ name, email, address, password });

    const res = await axios.post("http://localhost:5000/authenticate/createUser", { name, email, address, password })
    navigate("/storedashboard")
  }

  return (
    <div className='border h-screen flex items-center justify-center'>
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => {
          formSubmission(e)
        }}>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Address
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Adress" />
          </div>

          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>

          <div class="flex items-center justify-between">
            <input type="submit" value="Sign Up" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              <Link to={"/"}>
                Already have Account
              </Link>
            </a>
          </div>

        </form>
      </div>
    </div >
  )
}

export default Signup
