"use client";
import API from "@/app/(...)constant/api";
// import { cookies } from "next/headers";

export const useRegister = () => {
	var cookie = require("@boiseitguru/cookie-cutter");

	const register = async (username: string, password: string) => {
		try {
			const response = await fetch(API.REGISTER, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				// credentials:"include",
				mode: "cors",
				body: JSON.stringify({ username, password }),
			});

			const data = await response.json();
			if (response.ok) {
				console.log("User registered successfully!");
            
				// For example, redirect to dashboard
			} else {
				return alert(data.message);
			}
		} catch (error) {
			console.error("An error occurred:", error);
			// setError("An error occurred during sign-in");
		}
	};

	return { register };
};
