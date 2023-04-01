import { createContext, useContext, useState, useEffect } from "react";
import { loginWithGoogle, auth } from "../firebase/firebase";
import { postUser } from "../api/user";
import { useAuthState } from "react-firebase-hooks/auth";

export const AuthContext = createContext();

const AuthProvider = (props) => {
	const [user, setUser] = useState(null);
	const [_, loading, error] = useAuthState(auth);
	useEffect(() => {
		auth.onAuthStateChanged(setUser);
	}, []);

	const login = async () => {
		const { error } = await loginWithGoogle();

		if (!user && !loading) {
			console.log(error);
			if (error.code !== "auth/cancelled-popup-request") {
				notify(error.message, "error");
			}
			return;
		}

		const { id } = await postUser({ token: user.accessToken });

		user.id = id;
		// setUser(user);
	};

	const value = { user, login, loading, error };

	return (
		<AuthContext.Provider value={value} {...props}>
			{props.children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
