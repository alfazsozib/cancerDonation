import React, { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import axios from "axios";

function LoginModal({ setShowModal }) {
  const [register, setRegister] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email:"",
    password:""
  })

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleRegister = () => {
    setRegister((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    try {
        const response = await axios.post("http://localhost:8080/register", formData);
        console.log(response)
        if (response.status === 201) {
            console.log("Registration successful");
            alert("Registration successful")
        }
        
    } catch (error) {
        if (error.response && error.response.status === 400) {
                alert("Email already exists")
        } 
        if (error.response && error.response.status === 201) {
            alert("Registration successful")
    } else {
        console.error("Error during registration:", error.message);
    }
    }

    
};

const handleSubmitLogin = async (e) => {
    e.preventDefault();
    console.log(loginData);
    try {
        const response = await axios.post("http://localhost:8080/login", loginData);

        if (response.status === 200) {
            console.log("Login successful");
            alert("Login Successful");
        }
        console.log(response.status)
    } catch (error) {
        if (error.response.status == 401 && error.response.data.message === 'Invalid credentials') {
            alert("User Not Exits With this Email Please Register First.....");
        }
        console.error("Error during login:", error.message);
    }
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="w-[50rem] relative flex justify-center items-center h-96 bg-[#001c25b0] rounded-xl">
        <div className="absolute top-2 cursor-pointer right-4">
          <GiCrossMark onClick={closeModal} size={40} color="white" />
        </div>
        <div>
          <div className="flex flex-col gap-4">
            {register ? (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input
                  className="px-20 py-2 rounded-lg"
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  className="px-20 py-2 rounded-lg"
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <input
                  className="px-20 py-2 rounded-lg"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="px-20 py-2 rounded-lg"
                  type="text"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  onClick={handleSubmit}
                  className="bg-[#000000] font-serif text-white hover:bg-white hover:text-black font-bold py-2 rounded-lg"
                >
                  Register
                </button>
              </form>
            ) : (
              <>
                (
                <>
                {/* "Login Section" */}
                <form className="flex flex-col gap-4" onSubmit={handleSubmitLogin}>
                  <input
                    className="px-20 py-2 rounded-lg"
                    type="text"
                    name="email"
                    value={loginData.email}
                    onChange={handleChangeLogin}
                    placeholder="Enter Email Address"
                  />
                  <input
                    className="px-20 py-2 rounded-lg"
                    type="text"
                    name="password"
                    value={loginData.password}
                    onChange={handleChangeLogin}
                    placeholder="Enter Password"
                  />
                  <button className="bg-[#000000] font-serif text-white hover:bg-white hover:text-black font-bold py-2 rounded-lg">
                    Login
                  </button>
                  <button
                  onClick={toggleRegister}
                    className="bg-[#000000] font-serif text-white hover:bg-white hover:text-black font-bold py-2 rounded-lg"
                  >
                    Register
                  </button>
                  </form>
                </>
                )
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
