import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email!")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(6, "Password at least 6 characters")
    .required("Please enter your password"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className="container ">
      <div className="model text-start rounded-3xl bg-[#003580] grid gap-4 opacity-90">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-4xl text-white text-whitefont-bold text-center ">
            Login
          </h1>
          <div className="my-5 ">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-white"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              className={classNames(
                "form-control px-2 w-96 text-black bg-white py-1 outline-inherit  rounded",
                {
                  "border-1 border-rose-500": errors.email?.message,
                }
              )}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="my-5">
            <label
              htmlFor="exampleInputPassword1"
              className="text-white form-label"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              className={classNames(
                "form-control px-2 w-96 text-black bg-white py-1 outline-inherit  rounded",
                {
                  "border-1 border-rose-500": errors.password?.message,
                }
              )}
              id="exampleInputPassword1"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>

          <div className="my-5 flex justify-between items-center">
            <div className="flex text-white gap-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Remember Me">Remember Me</label>
            </div>
            <Link to="" className="text-red-500">
              Forgot Password
            </Link>
          </div>

          <button
            type="submit"
            className="bg-blue-700 px-4 py-1 text-blue-600 hover:bg-green-500 hover:text-white  text-white rounded-lg"
          >
            Login
          </button>
          <div className="form-bottom text-white">
            Do not have an account?
            <Link to={"/register"} className="text-decoration-none">
              {" "}
              <p className="text-red-500">Register Now!</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
