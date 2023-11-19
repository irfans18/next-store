// 'use client'
import API from "@/app/(...)constant/api";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
// import { cookies } from "next/headers";

export const useLogout = () => {
   const router = useRouter();
	const cookies = useCookies();
   const token = cookies.get("currentUser");
	const logout = async () => {
		try {
		   const response = await fetch(API.LOGOUT, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
					"Content-Type": "application/json",
				},
				credentials: "include",
				mode: "cors",
			});
		   // return response;
		} catch (error) {

		}
      cookies.remove("currentUser");
		router.push("/login");
      router.refresh();
	};

	return { logout };
};

		// alert(token)