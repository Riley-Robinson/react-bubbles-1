import React from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

const Login = (props) => {
	const { register, handleSubmit, errors } = useForm();
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route

	const onSubmit = (data) => {
		console.log(data);
		axiosWithAuth()
			.post("/api/login", {
				username: data.username,
				password: data.password,
			})

			.then((res) => {
				console.log(res);
				localStorage.setItem("token", res.data.payload);
				props.history.push("/bubblepage");
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<h1>Welcome to the Bubble App!</h1>
			<p>Build a login page here</p>
			<form onSubmit={handleSubmit(onSubmit)} className="login">
				<h1>Log into your colors here</h1>
				<label htmlFor="username">
					User Name:
					<input
						type="text"
						name="username"
						placeholder="User Name"
						ref={register({ required: true })}
					/>
					<br />
					{errors.username && <span> User Name us required ! </span>}
				</label>
				<br />
				<label htmlFor="password">
					password:
					<input
						type="text"
						name="password"
						placeholder="Password"
						ref={register({ required: true })}
					/>
					<br />
					{errors.password && <span> Password is Required </span>}
				</label>
				<br />
				<button type="submit"> Log In </button>
			</form>
		</>
	);
};

export default Login;
