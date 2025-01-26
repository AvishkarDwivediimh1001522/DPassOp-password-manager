"use client";
import { useRef } from "react";
import Link from "next/link";
import { submitAction } from "@/actions/form";

export default function Home() {
  const ref = useRef();

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Sign up to experience the best services tailored for you.
            </h1>
            <p className="leading-relaxed mt-4">
              Join our community and stay connected with the latest trends and updates.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div className="flex flex-col justify-center items-center ">
            <h2 className="text-gray-900 text-4xl  title-font mb-5 font-serif font-[530] ">Sign Up</h2>
          </div>
            <form
              ref={ref}
              action={submitAction} // Directly link the server-side action her7
              method="post" // Use POST method to securely send data
              className="flex flex-col gap-4"
            >
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-700">
                  Name
                </label>
                <input
                  name="name"
                  id="name"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-700">
                  Phone No.
                </label>
                <input
                  name="phone"
                  id="phone"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="email"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="add" className="leading-7 text-sm text-gray-700">
                  Address
                </label>
                <input
                  name="add"
                  id="add"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="password" className="leading-7 text-sm text-gray-700">
                  Password
                </label>
                <input
                  name="password"
                  id="password"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="password"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Already have an account?{" "}
              <Link className="text-indigo-500" href="/users/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}



