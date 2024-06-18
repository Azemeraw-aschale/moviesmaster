import { useDispatch, useSelector } from "react-redux";
import { saveEmployee, clearFields } from "../api/user_registration_slice";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EmployeeForm = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  function addEmployee(event) {
    event.preventDefault();

    // Check if user exist in database
    Axios.get(`http://localhost:3001/check_username/${username}`)
      .then((response) => {
        if (response.data.exists) {
          window.alert(
            "Username already exists. Please select another username."
          );
        } else {
          // if user not exist
          Axios.post(`http://localhost:3001/create`, {
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password,
          })
            .then((response) => {
              console.log(response.data.message);
              console.log(response.data.userData);
              window.confirm("Registration successfully");
              // Clear the form fields after successful addition
              setfirstname("");
              setlastname("");
              setusername("");
              setpassword("");
            })
            .catch((error) => {
              console.log("Error:", error);
              window.confirm("Unable to register user");
            });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        window.confirm("Error checking username");
      });
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-4 py-1rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">SignUp</h2>
        <form className="py-1">
          <div className="flex gap-3">
            <div className="mb-1">
              <input
                type="text"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
                required
                placeholder="First Name"
                value={firstname}
                onChange={(event) => setfirstname(event.target.value)}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
                required
                placeholder="Last Name"
                value={lastname}
                onChange={(event) => setlastname(event.target.value)}
              />
            </div>
          </div>

          <div className="mb-2">
            <input
              type="text"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
              required
              placeholder="Pick username"
              value={username}
              onChange={(event) => setusername(event.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
              required
              placeholder="Enter Password"
              value={password}
              onChange={(event) => setpassword(event.target.value)}
            />
          </div>
          <div className="mb-2"></div>
          <div className="mb-4">
            <button
              onClick={addEmployee}
              className="w-full  bg-[#293A77] text-white font-bold px-4 py-2 rounded-lg focus:outline-none"
              type="submit"
            >
              SignUp
            </button>
          </div>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="flex justify-between pt-4">
              <p>Already have an account ?</p>
              <button className="bg-[#293A77] px-2 rounded text-light font-bold">
                Login
              </button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default EmployeeForm;
