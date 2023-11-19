"use client";
import API from "@/app/(...)constant/api";
import { useCookies } from "next-client-cookies";

export const useAddProduct = () => {
	const cookies = useCookies();
	const token = cookies.get("currentUser");
	const addProduct = async (produk: any) => {
		try {
			const response = await fetch(API.ADD_PRODUCTS, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`, // Pass the token in the Authorization header

					"Content-Type": "application/json",
				},
				// credentials:"include",
				mode: "cors",
				body: JSON.stringify(produk),
			});

			const data = await response.json();
			if (response.ok) {
				console.log("Add Product successfully!");
				return alert(data.message);
				// For example, redirect to dashboard
			} else {
				return alert(data.message);
			}
		} catch (error) {
			console.error("An error occurred:", error);
			// setError("An error occurred during sign-in");
		}
	};

	return { addProduct };
};
