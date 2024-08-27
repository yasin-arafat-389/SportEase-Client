import { Button } from "@material-tailwind/react";
import { FormEvent, useState } from "react";
import { useRegistrationMutation } from "../../Redux/Features/Auth/authAPI";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";

const AddNewAdmin = () => {
  const [createAdmin, { isLoading }] = useRegistrationMutation();

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleCreateAdmin = async (e: FormEvent) => {
    e.preventDefault();

    const payload = {
      name: fullName,
      email,
      password,
      phone,
      role: "admin",
      address,
    };

    await createAdmin(payload);

    toast.success("Admin created successfully!");

    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
  };

  return (
    <div>
      <div className="w-full py-2 bg-secondary rounded-lg">
        <h1 className="text-white text-xl text-center">Add a new admin</h1>
      </div>

      <div className="flex justify-center items-center mt-6 w-full md:w-[40%] ml-0 md:ml-5 py-10 px-5 border-2 border-gray-700 rounded-lg">
        <form className="bg-white" onSubmit={handleCreateAdmin}>
          <div className="flex items-center border-2 py-2 px-3 border-gray-500 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <input
              required
              className="pl-2 outline-none border-none"
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="flex items-center border-2 py-2 px-3 border-gray-500 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              required
              className="pl-2 outline-none border-none"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center border-2 py-2 px-3 border-gray-500 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              required
              className="pl-2 outline-none border-none"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center border-2 py-2 px-3 border-gray-500 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2.003 5.884l.91-.512a1.954 1.954 0 011.778-.003l1.23.648a1.954 1.954 0 01.89 1.68c0 .556-.2 1.086-.565 1.516l-.518.588c.674 1.492 2.023 3.372 3.675 4.25l.7-.598a2.152 2.152 0 011.651-.486l1.565.31c.585.116 1.123.42 1.488.864l.911.511c.404.227.727.62.89 1.079a1.933 1.933 0 01-.163 1.514 15.953 15.953 0 01-2.162 2.605c-.353.337-.847.451-1.317.298a19.274 19.274 0 01-7.37-5.094 19.274 19.274 0 01-5.094-7.37 1.933 1.933 0 01.298-1.317 15.953 15.953 0 012.605-2.162c.459-.163.852-.486 1.079-.89z"
                clipRule="evenodd"
              />
            </svg>
            <input
              required
              className="pl-2 outline-none border-none"
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex items-center border-2 py-2 px-3 border-gray-500 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2C6.686 2 4 4.686 4 8c0 3.1 4 8 6 10 2-2 6-6.9 6-10 0-3.314-2.686-6-6-6zm0 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                clipRule="evenodd"
              />
            </svg>
            <input
              required
              className="pl-2 outline-none border-none"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <Button
            disabled={isLoading}
            type="submit"
            fullWidth
            className="bg-button capitalize text-lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {isLoading ? (
              <div className="flex gap-3 justify-center items-center text-2xl">
                <div className="animate-spin ">
                  <TbFidgetSpinner />
                </div>
                <span className="text-lg">Please Wait</span>
              </div>
            ) : (
              "Create"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddNewAdmin;
