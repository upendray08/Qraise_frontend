import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import back from "../asset/backg.jpg";
// import blank_profile from "../asset/blank_profile.webp";

const stylee = {
  width: "40%",
  height: "auto",
  margin: "0 auto",
  backgroundColor: "rgba(176, 176, 176, 0.7)",
  backdropFilter: "blur(1px)",
  borderRadius: "20px",
  boxShadow: "0 0 10px 2px rgb(101 78 138)",
  padding: "30px",
};

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const phone = "123XXX9992";

  const validateEmail = (email) => {
    // You can use a regular expression for email validation.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    // Validate password: Minimum 8 characters, first letter capital, mixture of alphabet, number, and special character
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (formData.name.trim() === "") {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!validateEmail(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    if (formData.password === "") {
      errors.password = "Password is required";
      isValid = false;
    } else if (!validatePassword(formData.password)) {
      errors.password =
        "Password should be at least 8 characters, with a capital letter, number, and special character.";
      isValid = false;
    }

    if (formData.password !== formData.cpassword) {
      errors.cpassword = "Passwords do not match";
      isValid = false;
    }

    setErrorMessages(errors);
    return isValid;
  };

  const register = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setErrorMessages({}); // Clear error messages
      // Continue with your registration logic
      const { name, email, password, cpassword } = formData;
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
          phone,
        }),
      });
      const data = await res.json();
      console.log(data.resp + " " + data.status);
      if (data.status === 0) {
        window.alert("User already exists");
      } else if (data.status === 1) {
        window.alert("User created successfully.");
        navigate("/login");
      } else if (data.status === 2) {
        window.alert("Password and Confirm Password should be the same.");
      }
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          backgroundImage: `url(${back})`,
          padding: "30px 50px",
          height: "667px",
          backgroundSize: "cover",
        }}
      >
        <div class="page" style={stylee}>
          <div class="register">
            <br />
            <h2 style={{ textAlign: "center", fontWeight: "500" }}>Register</h2>
            <br />
            <h6 style={{ textAlign: "center", fontWeight: "500" }}>
              Create a new account.
            </h6>
            <form method="POST" onSubmit={register}>
              <div class="mb-3">
                <label htmlFor="name" class="form-label">
                  Name
                </label>
                <input
                  value={formData.name}
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  class="form-control"
                  id="name"
                  required
                />
                {errorMessages.name && (
                  <span className="text-danger">{errorMessages.name}</span>
                )}
              </div>
              <div class="mb-3">
                <label htmlFor="email" class="form-label">
                  Email address
                </label>
                <input
                  value={formData.email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  required
                />
                {errorMessages.email && (
                  <span className="text-danger">{errorMessages.email}</span>
                )}
              </div>
              <div class="mb-3">
                <label htmlFor="password" class="form-label">
                  Password
                </label>
                <input
                  value={formData.password}
                  name="password"
                  onChange={handleInputChange}
                  type="password"
                  class="form-control"
                  id="password"
                  required
                />
                {errorMessages.password && (
                  <span className="text-danger">{errorMessages.password}</span>
                )}
              </div>
              <div class="mb-3">
                <label htmlFor="confirm_password" class="form-label">
                  Re-type Password
                </label>
                <input
                  value={formData.cpassword}
                  name="cpassword"
                  onChange={handleInputChange}
                  type="password"
                  class="form-control"
                  id="confirm_password"
                  required
                />
                {errorMessages.cpassword && (
                  <span className="text-danger">{errorMessages.cpassword}</span>
                )}
              </div>
              <br />
              <div
                class="mb-3"
                style={{ flexDirection: "row-reverse", display: "flex" }}
              >
                <button class="btn btn-primary">Cancel</button>
                <button
                  type="submit"
                  style={{ marginRight: "5px" }}
                  class="btn btn-primary"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
