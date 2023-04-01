import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { notify } from "../utils";

export const loginWithGoogle = async () => {
	try {
		const provider = new GoogleAuthProvider();
		provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
		const auth = getAuth();

		const response = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(response);
		const token = credential.accessToken;

		const user = response.user;
		return { user, token };
	} catch (error) {
		return { error };
	}
};
