import { createContext, useState } from "react";
import { loginWithGoogle } from "../services/firebase";

const AuthContext = createContext();

const AuthProvider = (props) => {
	const [user, setUser] = useState(null);

	const login = async () => {
		const { user, token, error } = await loginWithGoogle();

		if (!user) {
			if (error.code !== "auth/cancelled-popup-request") {
				notify(error.message, "error");
			}
		}

		setUser(user);
	};

	const value = { user, login };

	return <AuthContext.Provider value={value} {...props} />;
};

export const useAuth = useContext(AuthContext);
export default AuthProvider;
