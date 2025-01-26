"use client"
import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const ref = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    let passwordArray;
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])


  // const showPassword = () => {
  //   //alert("password shown")
  //   ref.current.src = "eyecross.png"
  // }

  const editPassword = (id) => {
    console.log("Editing password with id:", id);

    const passwordToEdit = passwordArray.find((item) => item.id === id);

    if (passwordToEdit) {
      setform({
        site: passwordToEdit.site,
        username: passwordToEdit.username,
        password: passwordToEdit.password,
      });

      setPasswordArray(passwordArray.filter((item) => item.id !== id));

      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }
  };

  const savePassword = () => {
    if (form.site.length > 0 && form.username.length > 0 && form.password.length > 0) {
      const updatedPasswords = [...passwordArray, { ...form, id: uuidv4() }];

      setPasswordArray(updatedPasswords);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));

      setform({ site: "", username: "", password: "" });

      toast("Password saved successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      toast("Error:Please don't left any field empty!")
    }
  };

  const deletePassword = (id) => {
    console.log("deleting password with id: ", id)
    let confirmUser = confirm("Do you really want to delet your password!")
    if (confirmUser) {
      setPasswordArray(passwordArray.filter(item => item.id !== id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
      toast('Password deleted! ', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const copyText = (text) => {
    toast('Copied to clipboard! ', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",


    });
    navigator.clipboard.writeText(text)
  }


  return (

    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] ">
      </div> */}
      <div className=" lg:px-0 lg:myContainer">
        <div className="logo mt-12 flex flex-col items-center justify-center">
          <div className="logo font-serif font-semibold text-5xl mb-2 ">
            &lt; <span>DPass</span><span className="text-green-700">Op</span><span>/&gt;</span>
          </div>

          <p className="text-gray-500 px-7 xs:pl-0 pl-20">Your own password managing application powered by </p>

          {/* <p className="xs:hidden text-gray-500">powered by</p> */}
          <p className="text-gray-500 hover:text-gray-800 ">@Dwivedi Group</p>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center  gap-8 mt-20  ">
        <input value={form.site} name="site" onChange={handleChange} className="xl:w-[44vw] lg:w-9/12 md:w-10/12 w-11/12 border-2 border-black rounded-full h-10 px-3 py-1" type="text" placeholder="Enter website URL" id="site" />
        <div className="w-full flex flex-col lg:flex-row lg:gap-12 gap-8 lg:justify-center justify-center items-center   ">
          <input value={form.username} name="username" onChange={handleChange} className="xl:w-3/12 lg:w-3/12 md:w-10/12
           md:9/12 w-11/12  border-2 border-black rounded-full h-10 px-3 py-1" type="text" placeholder="Enter username" />


          <div className="relative lg:w-auto md:w-[84vw] w-[92.5vw]  ">
            <input
              value={form.password}
              name="password"
              onChange={handleChange}
              className="w-full border-2 border-black rounded-full h-10 px-3 py-1 bg-[#F2F2F2]"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
            />
            <span
              className="absolute right-4 top-2.5 cursor-pointer bg-red-600"
              onClick={togglePasswordVisibility}
            >

              {showPassword ? (
                <img src="/eyecross.png" className="bg-red-700" alt="Hide password" width={23} />
              ) : (
                <img src="/eye.png" className="bg-red-700" alt="Show password" width={23} />
              )}
            </span>
          </div>

          {/* <input value={form.password} name="password" onChange={handleChange} className="lg:w-full md:w-[84vw] w-[92.5vw]  border-2 border-black rounded-full h-10 px-3 py-1 cursor-pointer"
              type={showPassword ? "password" : "text"} placeholder="Enter password" />
            <span ref={ref} className="absolute right-3 mt-2 text-base outline-none" onClick={showPassword}> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000">
                <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" fill="black" stroke="currentColor" stroke-width="0" />
                <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" fill="white" stroke="currentColor" stroke-width="0.1" />
              </svg> */}
          {/* <img className="py-1" width={25} src="eye.png" alt="eye" /> */}

          {/* </span> */}

        </div>
        <button onClick={savePassword} className="flex bg-gray-900 hover:bg-gray-800  text-white mt-7 rounded-full w-fit px-5 py-2 text-lg gap-2" >
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.25 4.75C4.25 4.19772 4.69772 3.75 5.25 3.75H9.75C10.3023 3.75 10.75 4.19772 10.75 4.75V9.25C10.75 9.80228 10.3023 10.25 9.75 10.25H5.25C4.69772 10.25 4.25 9.80228 4.25 9.25V4.75Z" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.5" />
            <path d="M4.25 14.75C4.25 14.1977 4.69772 13.75 5.25 13.75H9.75C10.3023 13.75 10.75 14.1977 10.75 14.75V19.25C10.75 19.8023 10.3023 20.25 9.75 20.25H5.25C4.69772 20.25 4.25 19.8023 4.25 19.25V14.75Z" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.5" />
            <path d="M14.25 4.75C14.25 4.19772 14.6977 3.75 15.25 3.75H19.75C20.3023 3.75 20.75 4.19772 20.75 4.75V9.25C20.75 9.80228 20.3023 10.25 19.75 10.25H15.25C14.6977 10.25 14.25 9.80228 14.25 9.25V4.75Z" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.5" />
            <path d="M17.5 14V20" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
            <path d="M20.5 17H14.5" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
          </svg>

          <p className="font-medium">Save</p>
        </button>
      </div>

      {/* <div className="passwordTable flex flex-col justify-center items-center mt-10">
        <h2 className="font-serif text-3xl text-gray-800">Your passwords </h2>
        {passwordArray.length === 0 && <div>No password has to show</div>}
        {passwordArray.length != 0 && <table className="table-auto lg:w-3/4 w-full mt-10 mb-28 rounded-lg overflow-hidden">
          <thead className="bg-green-800 text-white ">
            <tr>
              <th className=" text-lg font-medium  text-balance py-2 text-center">Website</th>
              <th className=" text-lg font-medium  text-balance py-2 text-center">Username</th>
              <th className=" text-lg font-medium  text-balance py-2 text-center">Password</th>
              <th className=" text-lg font-medium  text-balance py-2 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="bg-green-100 lg:w-3/4 w-full">
            {passwordArray.map((item, index) => {
              return <tr>
                <td className="border border-white py-2 px-5 ">
                  <div className="flex justify-between pl-6">
                    <a href="item.site" target="_blank">{item.site}</a>
                    <img className="ml-2" width={23} src="copy2.svg" onClick={() => copyText(item.site)} alt="copy text" />
                  </div>
                </td>
                <td className="border border-white py-2 px-8 text-center  ">
                  <div className="flex justify-between">
                    <p>
                      {item.username}
                    </p>

                    <img className="ml-2" width={23} src="copy2.svg" onClick={() => copyText(item.username)} alt="copy text" />
                  </div>
                </td>
                <td className="border border-white py-2 px-8 text-center  ">
                  <div className="flex justify-between">
                    <p>
                      {item.password}
                    </p>
                    <img className="ml-2" width={23} src="copy2.svg" onClick={() => copyText(item.password)} alt="copy text" />
                  </div>
                </td>
                <td className="border border-white py-2 px-8 text-center  ">
                  <div className="flex justify-center gap-8">
                    <div className="flex-col items-center">
                      <img className="hover:font-semibold cursor-pointer" src="pencile_edit.svg" alt="edit"
                        onClick={() => editPassword(item.id)} />
                      <p className="text-[10px] mt-1 text-gray-700">Edit</p>
                    </div>
                    <div>
                      <img className="hover:font-semibold cursor-pointer" onClick={() => deletePassword(item.id)} src="bin_delete.svg" alt="delete" />
                      <p className="text-[10px] mt-1 text-gray-700" >Delete</p>
                    </div>
                  </div>
                </td>
              </tr>
            })}

          </tbody>

        </table>}
      </div>

    </div>
  );
}

 */}



      <div className="passwordTable flex flex-col justify-center items-center mt-10">
        <h2 className="font-serif text-3xl text-gray-800">Your passwords</h2>
        {passwordArray.length === 0 && <div>No password has to show</div>}
        {passwordArray.length !== 0 && (
          <div className="overflow-x-auto w-full lg:flex lg:justify-center">
            <table className="table-auto lg:w-9/12 w-full mt-10 mb-24 rounded-lg overflow-hidden">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="text-lg font-medium py-2 text-center">Website</th>
                  <th className="text-lg font-medium py-2 text-center">Username</th>
                  <th className="text-lg font-medium py-2 text-center">Password</th>
                  <th className="text-lg font-medium py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="bg-green-100 lg:w-3/4 w-full">
                {passwordArray.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-white py-2 lg:px-5 ">
                      <div className="flex justify-between ">
                        <a href={item.site} target="_blank" rel="noopener noreferrer" className="overflow-hidden truncate">
                          {item.site}
                        </a>
                        <img
                          className="ml-2"
                          width={23}
                          src="copy2.svg"
                          onClick={() => copyText(item.site)}
                          alt="copy text"
                        />
                      </div>
                    </td>
                    <td className="border border-white py-2 px-8 text-center">
                      <div className="flex justify-between">
                        <p className="overflow-hidden truncate">{item.username}</p>
                        <img
                          className="ml-2"
                          width={23}
                          src="copy2.svg"
                          onClick={() => copyText(item.username)}
                          alt="copy text"
                        />
                      </div>
                    </td>
                    <td className="border border-white py-2 px-8 text-center">
                      <div className="flex justify-between">
                        <p className="overflow-hidden truncate">{item.password}</p>
                        <img
                          className="ml-2"
                          width={23}
                          src="copy2.svg"
                          onClick={() => copyText(item.password)}
                          alt="copy text"
                        />
                      </div>
                    </td>
                    <td className="border border-white py-2 px-8 text-center">
                      <div className="flex justify-center gap-8">
                        <div className="flex-col items-center">
                          <img
                            className="hover:font-semibold cursor-pointer"
                            width={23}
                            src="pencile_edit.svg"
                            alt="edit"
                            onClick={() => editPassword(item.id)}
                          />
                          <p className="text-[10px] mt-1 text-gray-700">Edit</p>
                        </div>
                        <div>
                          <img
                            className="hover:font-semibold cursor-pointer"
                            onClick={() => deletePassword(item.id)}
                            src="bin_delete.svg"
                            alt="delete"
                          />
                          <p className="text-[10px] mt-1 text-gray-700">Delete</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="moreAction pl-5 mb-5 lg:hidden ">
              <span className="font-medium">Note :- </span>
              <span> Please slide the table from left to right for more information</span>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}