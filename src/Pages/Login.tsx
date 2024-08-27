/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Redux/Features/Auth/authAPI";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { selectCurrentUser, setUser } from "../Redux/Features/Auth/authSlice";
import { TbFidgetSpinner } from "react-icons/tb";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userInfo = { email, password };
      const res = await login(userInfo).unwrap();

      console.log(res);

      dispatch(setUser({ user: res?.data, token: res?.token }));

      toast.success("Logged in successfully");

      navigate("/");
    } catch (err: any) {
      if (err.data.success === false) {
        toast.error(err.data.message);
      }
    }
  };

  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="bg-[#F5EDED]">
      <div className="py-16">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2">
            <img
              src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg?w=740&t=st=1724554960~exp=1724555560~hmac=6064a75a7f58f77ff4a136410a04650dffc247f6acb5377d73ff67c9986a77a5"
              alt=""
            />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              SportEase
            </h2>
            <p className="text-xl text-gray-600 text-center">
              Login to manage bookings!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                </div>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mt-8">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="bg-button hover:bg-button-dark text-white font-bold py-2 px-4 w-full rounded"
                >
                  {isLoading ? (
                    <div className="flex gap-3 justify-center items-center text-2xl">
                      <div className="animate-spin ">
                        <TbFidgetSpinner />
                      </div>
                      <span className="text-lg">Please Wait</span>
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>

            <div className="">
              <span className="border-b"></span>
              <p className="text-lg text-gray-600 mt-4">
                New to this platform?{" "}
                <Link
                  to={"/registration"}
                  className="text-button-dark hover:underline"
                >
                  sign up
                </Link>
              </p>

              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
