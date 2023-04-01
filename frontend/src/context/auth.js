import { createContext, useState } from "react";
import { loginWithGoogle } from "../firebase/firebase.js";
import { postUser } from "../api/user";

const AuthContext = createContext();

const AuthProvider = (props) => {
	const [user, setUser] = useState(null);

	const login = async () => {
		const { user, token, error } = await loginWithGoogle();

		if (!user) {
			if (error.code !== "auth/cancelled-popup-request") {
				notify(error.message, "error");
			}
			return;
		}

		const { id } = await postUser({ token });

		user.id = id;
		setUser(user);
	};

	const value = { user, login };

	return (
		<AuthContext.Provider
			value={value}
			{...props}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export const useAuth = useContext(AuthContext);
export default AuthProvider;
