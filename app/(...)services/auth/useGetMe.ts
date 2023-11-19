// 'use client'
import API from "@/app/(...)constant/api";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

interface Iuser {
	id: number;
	name: string;
	email: string;
	gender: string;
}

export const useGetCurrentUser = () => {
	// const cookies = useCookies();
	const getCurrentUser = async () => {
		const token = cookies().get("currentUser");
		// const token = "eyJ0eXAiO.../// jwt token";
		const decoded = jwtDecode(token?.value as string);
		console.log(decoded);
      const user: Iuser = decoded.sub;
		return user;
	};

	return { getCurrentUser }
}
