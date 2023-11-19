'use client'
import API from "@/app/(...)constant/api";
// import { cookies } from "next/headers";

export const useLogin = () => {
   var cookie = require("@boiseitguru/cookie-cutter");

	const login = async (email: string, password: string) => {
      try {
			const response = await fetch(API.LOGIN, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				// credentials:"include",
				mode: "cors",
				body: JSON.stringify({ email, password }),
			});

         const data = await response.json();
			if (response.ok) {
				console.log("User logged in successfully!");
				const { access_token } = data;
				cookie.set("currentUser", access_token);
            
				// For example, redirect to dashboard
			} else {
            return alert(data.message);
			}
		} catch (error) {
			console.error("An error occurred:", error);
			// setError("An error occurred during sign-in");
		}
	};

	return { login };
};
