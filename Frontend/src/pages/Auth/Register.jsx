import React, { use } from "react";

import Header from "../../components/Header";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext";

const Register = () => {
  const { createUser, googleSignIn, updateUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleEmailSignin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    console.log({ name, email, photo, password });

    createUser(email, password)
      .then((result) => {
        // console.log(result.user);

        updateUser(name, photo)
          .then(() => {
            const newUser = {
              name: result.user.displayName,
              email: result.user.email,
              image: result.user.photoURL,
            };
            // console.log(result.user);
            // create user
            fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("after saving data", { data });
              });

            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    // console.log("first");
    googleSignIn()
      .then((result) => {
        console.log(result.user);
         const newUser = {
           name: result.user.displayName,
           email: result.user.email,
           image: result.user.photoURL,
         };
         // console.log(result.user);
         // create user
         fetch("http://localhost:3000/users", {
           method: "POST",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(newUser),
         })
           .then((res) => res.json())
           .then((data) => {
             console.log("after saving data", { data });
             //  if()
             
           });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div className=" bg-[#F5F5F5] text-gray-900">
        <div className="flex justify-center items-center h-screen p-4">
          <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
              Register Now!
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-purple-600 font-medium hover:underline"
              >
                Login Now
              </Link>
            </p>

            <form onSubmit={handleEmailSignin} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="your name"
                  className="w-full border rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full border rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Image-URL
                </label>
                <input
                  required
                  name="photo"
                  type="text"
                  placeholder="Image URL here"
                  className="w-full border rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  required
                  name="password"
                  type="password"
                  placeholder="************"
                  className="w-full border rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <button className="w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition cursor-pointer">
                Register
              </button>
            </form>

            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-500 text-sm">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full border rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-6 h-6"
              />
              <span className="font-medium text-gray-700">
                Sign Up With Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
