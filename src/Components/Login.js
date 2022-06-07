import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Registration from "./Registration";
import Home from "./Home";

import { useNavigate, Link, useLocation } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Required!!"),
    password: yup.string().required("Required!!"),
  });
  const onSubmit = (values) => {};
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  function handleFormSubmit(e) {
    formik.handleSubmit(e);
    var arr = JSON.parse(localStorage.getItem("formdata"));
    if (arr === null) {
      setIsCorrect(!isCorrect);
    } else if (
      arr.some(
        (user) =>
          user.email === formik.values.email &&
          user.password === formik.values.password
      )
    ) {
      let ob = { email: formik.values.email, password: formik.values.password };
      sessionStorage.setItem("userInfo", JSON.stringify(ob));
      setLoggedIn(true);
      navigate("/home", { state: { email: formik.values.email } });
    } else {
      setIsCorrect(!isCorrect);
    }
  }
  return (
    <div className="container row px-1" >
      <div className="col-md-8  d-none d-sm-none d-md-block">
        <img
         src="https://images5.alphacoders.com/549/549227.jpg"
         alt=""
         style={{ width: "1270px", height: "608px" }}>
        </img>
      </div>
      <div className="col-md-4 opacity-100 " style={{ marginTop: "50px" }}>
        <div className="mb-5 text-center" >
          <p className="h2 text-center text-dark ">Login to your Account!</p>
          
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-control bg-muted">
            <label htmlFor="email" className="form-label fw-bold opacity-75">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control bg-light mb-2"
              placeholder="Enter Your Email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            ></input>
            <div className="error text-danger mb-2">
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
            <label htmlFor="password" className="form-label fw-bold opacity-75">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control mb-2 bg-light "
              placeholder="Enter Password "
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            ></input>
            <div className="form-error text-danger mt-0">
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>

            <div className=" mb-4 mt-4">
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary btn-lg  col-12"
                  >
                  Login
                </button>
              </div>
              <span className="h6 opacity-75">Not a user?</span>
          <Link to="/SignUp">
            <span>Register</span>
          </Link>
            </div>
            {isCorrect ? (
              <div></div>
            ) : (
              <div className="text-danger">
                Incorrect Username or Password
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;