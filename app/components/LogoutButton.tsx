'use client'
import { useLogout } from "../(...)services/auth/useLogout";

const LogoutButton = () => {
  const { logout } = useLogout();

	const handleLogout = async () => await logout();
   return (
		<>
         <button
            onClick={handleLogout}
            className="text-xl p-4 bg-red-400 rounded-lg text-white"
         >
            Logout
         </button>
      </>
	);
};

export default LogoutButton;
