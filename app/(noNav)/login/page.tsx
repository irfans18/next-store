"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLogin } from "../../(...)services/auth/useLogin";

const Login = () => {
	const { push } = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const { login } = useLogin();

	const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email || !password) {
			alert("Please enter information");
		} else {
			login(email, password)
				.then((res) => push("/products"))
				.catch((e) => alert(e));
		}
	};

	return (
		<main className="flex min-h-screen">
			<>
				{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
				<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
					<div className="sm:mx-auto sm:w-full sm:max-w-sm">
						<img
							className="mx-auto h-10 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt="Your Company"
						/>
						<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
							Sign in to your account
						</h2>
					</div>

					<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
						<form
							onSubmit={handleSignIn}
							className="space-y-6"
							// action="http://127.0.0.1:5000"
							// method="POST"
						>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Email
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="text"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										autoComplete="email"
										required
										className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Password
									</label>
									{/* <div className="text-sm">
										<a
											href="#"
											className="font-semibold text-indigo-600 hover:text-indigo-500"
										>
											Forgot password?
										</a>
									</div> */}
								</div>
								<div className="mt-2">
									<input
										id="password"
										name="password"
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										autoComplete="current-password"
										required
										className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Sign in
								</button>
							</div>
						</form>

						<p className="mt-10 text-center text-sm text-gray-500">
							Not a member?{" "}
							<Link
								href="/register"
								className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
							>
								Register
							</Link>
						</p>
					</div>
				</div>
			</>
		</main>
	);
};
export default Login;
