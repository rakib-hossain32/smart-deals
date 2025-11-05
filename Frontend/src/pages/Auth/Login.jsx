import { FcGoogle } from "react-icons/fc";
import Header from "../../components/Header";
import { Link, Navigate, useNavigate } from "react-router";
import { use } from "react";
import AuthContext from "../../context/AuthContext";
import { useRef } from "react";

const Login = () => {
  const { googleSignIn, signIn, resetPassword } = use(AuthContext);

  const emailRef = useRef(null);

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // console.log("first");
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleResetPassword = () => {
    // console.log('first')
    const email = emailRef.current.value;
    console.log({ email });
    resetPassword(email)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-[#F5F5F5] ">
      <Header />
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="bg-white  max-w-96 mx-4 md:p-6 p-4 text-center text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
          <h3 className=" text-center justify-start text-black text-3xl font-semibold mb-3 ">
            Login
          </h3>
          <p className="text-[#001931]">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="font-medium  text-violet-700 text-base  hover:underline leading-6"
            >
              Register Now
            </Link>
          </p>
          <form onSubmit={handleSignin}>
            <input
              ref={emailRef}
              name="email"
              className="w-full bg-transparent border my-3 border-gray-500/30 text-gray-500 outline-none rounded-full py-2.5 px-4"
              type="email"
              placeholder="Enter your email"
              required
            />
            <input
              name="password"
              className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4 text-gray-500"
              type="password"
              placeholder="Enter your password"
              required
            />
            <div className="text-right py-4">
              <button
                onClick={handleResetPassword}
                type="button"
                className="text-blue-600 underline cursor-pointer hover:text-blue-900"
              >
                Forgot Password
              </button>
            </div>
            <button
              // type="button"
              className="w-full  h-12 px-4 py-3 bg-linear-to-br from-violet-700 to-purple-500 rounded-full inline-flex justify-center items-center gap-2.5 cursor-pointer"
            >
              Log in
            </button>
          </form>

          <div className="divider  text-gray-700">OR</div>

          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full flex items-center gap-2 justify-center mt-5  py-2.5 rounded-full  text-[#001931] border cursor-pointer"
          >
            <FcGoogle size={24} />
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
