import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export const loginWithGoogle = async () => {
	try {
		const provider = new GoogleAuthProvider();
		provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
		const auth = getAuth();

		const response = await signInWithPopup(auth, provider);

		const user = response.user;
		return { user };
	} catch (error) {
		return { error };
	}
};
