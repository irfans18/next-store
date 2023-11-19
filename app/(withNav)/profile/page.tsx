import { useGetCurrentUser } from "@/app/(...)services/auth/useGetMe";
import LogoutButton from "@/app/components/LogoutButton";
// import { useCookies } from "next-client-cookies";


const Profile = async () => {
	const { getCurrentUser } = useGetCurrentUser();

	const user = await getCurrentUser();
   // console.log(user.id)

	return (
		<>
			<div className="w-screen h-screen bg-gray-100 flex">
				<div className="max-w-sm h-fit bg-white shadow-lg rounded-lg space-y-4 overflow-hidden p-4 m-4">
					<h1 className="text-xl font-bold">Profile</h1>
					<p className="text-xl">Name : {user.name}</p>
					<p className="text-xl">Email : {user.email}</p>
					<p className="text-xl">Gender : {user.gender}</p>
					<LogoutButton />
				</div>
			</div>
		</>
	);
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {

//    return {
//       props:{

//       }
//    }
// }

export default Profile;
