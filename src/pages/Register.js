import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email.toLowerCase());
  }

  const validate = (userDetails) => {
    if (userDetails.name.length < 1) {
      alert("İsim boş olamaz");
      return false;
    }

    if (!validateEmail(userDetails.email)) {
      alert("Geçerli bir email adresi giriniz");
      return false;
    }

    if (userDetails.password.length < 6) {
      alert("Şifre 6 karakterden kısa olamaz");
      return false;
    }

    if (userDetails.password !== userDetails.checkPassword) {
      alert("Şifreler eşleşmiyor");
      return false;
    }

    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = {
      name: userDetails.name,
      email: userDetails.email,
      password: userDetails.password,
    };

    if (validate(userDetails)) {
      try {
        const response = await axios.post("/users/register", user);
        console.log("Response from server:", response.data);
      } catch (error) {
        console.error("Error while registering:", error);
      }
    }
  };

  return (
    <>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
      />
      <div className="container">
        <br />
        <div className="card bg-light">
          <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
            <h4 className="card-title mt-3 text-center">Create Account</h4>
            <p className="text-center">Get started with your free account</p>
            <p>
              <a href="/" className="btn btn-block btn-twitter">
                <i className="fab fa-twitter" /> &nbsp; Login via Twitter
              </a>
              <a href="/" className="btn btn-block btn-facebook">
                <i className="fab fa-facebook-f" /> &nbsp; Login via Facebook
              </a>
            </p>
            <p className="divider-text">
              <span className="bg-light">OR</span>
            </p>
            <form>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user" />
                  </span>
                </div>
                <input
                  name="name"
                  required
                  value={userDetails.name}
                  className="form-control"
                  placeholder="Full name"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-envelope" />
                  </span>
                </div>
                <input
                  name="email"
                  required
                  value={userDetails.email}
                  className="form-control"
                  placeholder="Email address"
                  type="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-phone" />
                  </span>
                </div>
                <select className="custom-select" style={{ maxWidth: 120 }}>
                  <option defaultValue="">+971</option>
                  <option value={1}>+972</option>
                  <option value={2}>+198</option>
                  <option value={3}>+701</option>
                </select>
                <input
                  name=""
                  className="form-control"
                  placeholder="Phone number"
                  type="text"
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-building" />
                  </span>
                </div>
                <select className="form-control">
                  <option defaultValue="">Select job type</option>
                  <option>Designer</option>
                  <option>Manager</option>
                  <option>Accounting</option>
                </select>
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock" />
                  </span>
                </div>
                <input
                  name="password"
                  required
                  value={userDetails.password}
                  className="form-control"
                  placeholder="Create password"
                  type="password"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock" />
                  </span>
                </div>
                <input
                  name="checkPassword"
                  required
                  value={userDetails.checkPassword}
                  className="form-control"
                  placeholder="Repeat password"
                  type="password"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <button
                  onClick={submitHandler}
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Create Account
                </button>
              </div>
              <p className="text-center">
                Have an account? <Link to="/login">Log In</Link>
              </p>
            </form>
          </article>
        </div>
      </div>
      <br />
      <br />
      <article className="bg-secondary mb-3"></article>
    </>
  );
};

export default Register;
