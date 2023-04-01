import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
export const auth = getAuth();

export const loginWithGoogle = async () => {
	try {
		const response = await signInWithPopup(auth, provider);

		const user = response.user;
		return { user };
	} catch (error) {
		return { error };
	}
};

export const logOut = async () => {
	signOut(auth);
};
