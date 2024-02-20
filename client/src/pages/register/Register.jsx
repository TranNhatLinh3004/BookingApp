import React from "react";
import "./Register.css";
// import Button from "../../Components/Button/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Password at least 3 characters")
    .required("Please enter your name"),
  email: yup
    .string()
    .email("Invalid email!")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(6, "Password at least 6 characters")
    .required("Please enter your password"),
});

const Register = () => {
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
    navigate("/login");
  };
  return (
    <div className="container ">
      <div className="model rounded-3xl bg-[#003580]">
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-4xl text-white text-whitefont-bold text-center ">
            Register
          </h1>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="text-white form-label">
              Your name
            </label>
            <input
              type="name"
              name="name"
              className={classNames("form-control w-96", {
                "border border-danger": errors.name?.message,
              })}
              id="exampleInputName1"
              aria-describedby="nameHelp"
              {...register("name")}
            />
            {errors.email?.message && (
              <p className="text-danger">{errors.name?.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="text-white form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className={classNames("form-control w-96", {
                "border border-danger": errors.email?.message,
              })}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="text-danger">{errors.email?.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="text-white form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className={classNames("form-control w-96", {
                "border border-danger": errors.password?.message,
              })}
              id="exampleInputPassword1"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="text-danger">{errors.password?.message}</p>
            )}
          </div>
          
            <div className="flex text-red-500 gap-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Remember Me">I accept the terms of the agreement</label>
            </div>
            <button
            type="submit"
            className="bg-blue-700 px-4 mt-5 py-1 text-blue-600 hover:bg-green-500 hover:text-white  text-white rounded-lg"
          >
            CREATE ACCOUNT
          </button>
          
          {/* <Button name={"Register"} type="submit" className="btn btn-primary" /> */}
        </form>
      </div>
    </div>
  );
};

export default Register;
