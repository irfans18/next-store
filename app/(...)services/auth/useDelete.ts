// 'use client'
import API from "@/app/(...)constant/api";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
// import { cookies } from "next/headers";

export const useDeleteProduct = () => {
	const router = useRouter();
	const cookies = useCookies();
	const token = cookies.get("currentUser");
	const deleteProduct = async (id: number) => {
		try {
			const response = await fetch(API.DELETE_PRODUCTS + id, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
					"Content-Type": "application/json",
				},
				mode: "cors",
			});
			const data = await response.json();
			if (response.ok) {
				console.log("Delete product successfully!");
            router.refresh()
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

	return { deleteProduct };
};

// alert(token)
