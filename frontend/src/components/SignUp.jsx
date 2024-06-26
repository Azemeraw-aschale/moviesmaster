import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email:"",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addEmployee = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await Axios.post("http://localhost:8080/api/auth/register", formData);
      if (response.data.exists) {
        setError("Username already exists. Please select another username.");
      } else {
        setSuccess("Registration successful");
        setFormData({
          firstname: "",
          lastname: "",
          username: "",
          email:"",
          password: "",
        });
      }
    } catch (error) {
      setError("An error occurred while processing your request. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-4 py-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">SignUp</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}
        <form onSubmit={addEmployee}>
          <div className="flex gap-3">
            <div className="mb-4 w-1/2">
              <input
                type="text"
                name="firstname"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
                required
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 w-1/2">
              <input
                type="text"
                name="lastname"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
                required
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
              required
              placeholder="Pick a Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
              required
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full bg-[#293A77] text-white font-bold px-4 py-2 rounded-lg focus:outline-none"
            type="submit"
          >
            SignUp
          </button>
        </form>
        <Link to="/login" className="block text-center mt-4">
          <p className="text-gray-600">Already have an account?</p>
          <button className="bg-[#293A77] text-white font-bold px-4 py-2 rounded-lg mt-2">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeForm;
